import { ArrowUpRight } from "lucide-react";
import { profile } from "../_data/profile";
import ActivityHeatmap, { type ActivityDataset } from "./ActivityHeatmap";
import { getGitHubYears } from "./GitHubActivity";
import { getLeetCodeYears } from "./LeetCodeActivity";

export default async function Activity() {
  const [githubYears, leetcodeYears] = await Promise.all([
    getGitHubYears(),
    getLeetCodeYears(),
  ]);

  const datasets: ActivityDataset[] = [];
  if (githubYears.length) {
    datasets.push({ source: "github", years: githubYears, profileUrl: profile.github });
  }
  if (leetcodeYears.length) {
    datasets.push({ source: "leetcode", years: leetcodeYears, profileUrl: profile.leetcode });
  }

  if (datasets.length === 0) {
    return (
      <div className="activity-fallback">
        <p>Activity data is temporarily unavailable.</p>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={12} aria-hidden="true" />
        </a>
        <a href={profile.leetcode} target="_blank" rel="noreferrer">
          LeetCode <ArrowUpRight size={12} aria-hidden="true" />
        </a>
      </div>
    );
  }

  return <ActivityHeatmap datasets={datasets} />;
}
