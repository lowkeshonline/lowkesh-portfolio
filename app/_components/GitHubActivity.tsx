import type { ContributionDay, ContributionYear } from "./ActivityHeatmap";

const USERNAME = "lowkeshonline";

async function getContributionYear(year: number): Promise<ContributionYear | null> {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=${year}`,
      {
        next: { revalidate: 21_600 },
        signal: AbortSignal.timeout(8_000),
      },
    );

    if (!response.ok) return null;

    const payload = (await response.json()) as {
      total?: Record<string, number>;
      contributions?: ContributionDay[];
    };

    const contributions = payload.contributions;
    if (!contributions?.length) return null;

    const today = new Date().toISOString().slice(0, 10);
    const days = year === new Date().getFullYear()
      ? contributions.filter((day) => day.date <= today)
      : contributions;

    if (!days.length) return null;

    return {
      year,
      total: Number(payload.total?.[year] ?? 0),
      days,
    };
  } catch {
    return null;
  }
}

export async function getGitHubYears(): Promise<ContributionYear[]> {
  const currentYear = new Date().getFullYear();
  const results = await Promise.all([
    getContributionYear(currentYear),
    getContributionYear(currentYear - 1),
  ]);

  return results.filter((entry): entry is ContributionYear => entry !== null);
}
