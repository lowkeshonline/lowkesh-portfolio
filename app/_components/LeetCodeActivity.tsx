import type { ContributionDay, ContributionYear } from "./ActivityHeatmap";

const USERNAME = "lowkeshonline";
const ENDPOINT = "https://leetcode.com/graphql";

const CALENDAR_QUERY = `query userProfileCalendar($username: String!, $year: Int) {
  matchedUser(username: $username) {
    userCalendar(year: $year) {
      submissionCalendar
    }
  }
}`;

function levelFor(count: number) {
  if (count <= 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

async function getSubmissionYear(year: number): Promise<ContributionYear | null> {
  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        "User-Agent": "Mozilla/5.0 (compatible; portfolio-activity/1.0)",
      },
      body: JSON.stringify({
        query: CALENDAR_QUERY,
        variables: { username: USERNAME, year },
      }),
      next: { revalidate: 21_600 },
      signal: AbortSignal.timeout(8_000),
    });

    if (!response.ok) return null;

    const payload = (await response.json()) as {
      data?: {
        matchedUser?: {
          userCalendar?: { submissionCalendar?: string } | null;
        } | null;
      };
    };

    const calendar = payload.data?.matchedUser?.userCalendar?.submissionCalendar;
    if (!calendar) return null;

    const counts = JSON.parse(calendar) as Record<string, number>;
    const now = new Date();
    const end = year === now.getUTCFullYear() ? now : new Date(Date.UTC(year, 11, 31));
    const days: ContributionDay[] = [];

    for (
      const cursor = new Date(Date.UTC(year, 0, 1));
      cursor <= end;
      cursor.setUTCDate(cursor.getUTCDate() + 1)
    ) {
      const date = cursor.toISOString().slice(0, 10);
      const count = Number(counts[String(Math.floor(cursor.getTime() / 1000))] ?? 0);
      days.push({ date, count, level: levelFor(count) });
    }

    if (days.length === 0) return null;

    return {
      year,
      total: days.reduce((sum, day) => sum + day.count, 0),
      days,
    };
  } catch {
    return null;
  }
}

export async function getLeetCodeYears(): Promise<ContributionYear[]> {
  const currentYear = new Date().getFullYear();
  const results = await Promise.all([
    getSubmissionYear(currentYear),
    getSubmissionYear(currentYear - 1),
  ]);

  return results.filter((entry): entry is ContributionYear => entry !== null);
}
