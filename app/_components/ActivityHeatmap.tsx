"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export type ActivitySource = "github" | "leetcode";

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface ContributionYear {
  year: number;
  total: number;
  days: ContributionDay[];
}

export interface ActivityDataset {
  source: ActivitySource;
  years: ContributionYear[];
  profileUrl: string;
}

const SOURCE_LABELS: Record<
  ActivitySource,
  { label: string; activity: string; activities: string }
> = {
  github: {
    label: "GitHub",
    activity: "contribution",
    activities: "contributions",
  },
  leetcode: {
    label: "LeetCode",
    activity: "submission",
    activities: "submissions",
  },
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

function formatDay(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function buildWeeks(days: ContributionDay[]) {
  if (days.length === 0) return [];
  const firstDay = new Date(`${days[0].date}T00:00:00Z`).getUTCDay();
  const cells: (ContributionDay | null)[] = [
    ...Array.from({ length: firstDay }, () => null),
    ...days,
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const weeks: (ContributionDay | null)[][] = [];
  for (let index = 0; index < cells.length; index += 7) {
    weeks.push(cells.slice(index, index + 7));
  }
  return weeks;
}

function buildMonthLabels(days: ContributionDay[]) {
  if (days.length === 0) return [];
  const firstDay = new Date(`${days[0].date}T00:00:00Z`).getUTCDay();
  const labels: { week: number; label: string }[] = [];
  let lastMonth = -1;

  days.forEach((day, index) => {
    const date = new Date(`${day.date}T00:00:00Z`);
    const month = date.getUTCMonth();
    if (month !== lastMonth) {
      labels.push({
        week: Math.floor((firstDay + index) / 7),
        label: MONTHS[month],
      });
      lastMonth = month;
    }
  });

  return labels;
}

function SourceIcon({ source }: { source: ActivitySource }) {
  return source === "leetcode" ? (
    <SiLeetcode size={13} aria-hidden="true" />
  ) : (
    <FaGithub size={13} aria-hidden="true" />
  );
}

export default function ActivityHeatmap({ datasets }: { datasets: ActivityDataset[] }) {
  const [source, setSource] = useState<ActivitySource>(datasets[0]?.source ?? "github");
  const dataset = datasets.find((entry) => entry.source === source) ?? datasets[0];
  const [selectedYear, setSelectedYear] = useState<number | undefined>(dataset?.years[0]?.year);
  const selected = dataset.years.find((entry) => entry.year === selectedYear) ?? dataset.years[0];

  const weeks = useMemo(() => buildWeeks(selected.days), [selected]);
  const monthLabels = useMemo(() => buildMonthLabels(selected.days), [selected]);
  const total = new Intl.NumberFormat("en").format(selected.total);
  const columns = Math.max(weeks.length, 1);
  const labels = SOURCE_LABELS[dataset.source];
  const activeIndex = Math.max(
    0,
    datasets.findIndex((entry) => entry.source === source),
  );
  const switchStyle = {
    "--switch-count": datasets.length,
    "--switch-index": activeIndex,
  } as CSSProperties;
  const gridStyle = {
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
  };

  function chooseSource(next: ActivitySource) {
    const nextDataset = datasets.find((entry) => entry.source === next);
    if (!nextDataset) return;
    setSource(next);
    if (!nextDataset.years.some((entry) => entry.year === selectedYear)) {
      setSelectedYear(nextDataset.years[0]?.year);
    }
  }

  return (
    <div className="activity">
      <div className="activity-toolbar">
        <div
          className="activity-switch"
          role="group"
          aria-label="Activity source"
          style={switchStyle}
        >
          {datasets.length > 1 && <span className="activity-switch-thumb" aria-hidden="true" />}
          {datasets.map((entry) => (
            <button
              key={entry.source}
              type="button"
              aria-pressed={entry.source === source}
              onClick={() => chooseSource(entry.source)}
            >
              <SourceIcon source={entry.source} />
              {SOURCE_LABELS[entry.source].label}
            </button>
          ))}
        </div>
        <label className="year-picker" htmlFor="contribution-year">
          Year
          <span className="year-select-wrap">
            <select
              id="contribution-year"
              value={selected.year}
              onChange={(event) => setSelectedYear(Number(event.target.value))}
            >
              {dataset.years.map((entry) => (
                <option key={entry.year} value={entry.year}>
                  {entry.year}
                </option>
              ))}
            </select>
            <ChevronDown size={11} aria-hidden="true" />
          </span>
        </label>
      </div>

      <div className="heatmap-panel">
        <div className="heatmap-scroll">
          <div className="heatmap-canvas">
            <div className="heatmap-months" style={gridStyle} aria-hidden="true">
              {monthLabels.map((entry) => (
                <span
                  key={`${entry.label}-${entry.week}`}
                  style={{ gridColumn: `${entry.week + 1} / span 3` }}
                >
                  {entry.label}
                </span>
              ))}
            </div>
            <div className="heatmap-body">
              <div className="heatmap-days" aria-hidden="true">
                {DAY_LABELS.map((label, index) => (
                  <span key={index}>{label}</span>
                ))}
              </div>
              <div
                className="heatmap-grid"
                style={{ ...gridStyle, aspectRatio: `${columns} / 7` }}
                role="img"
                aria-label={`${labels.label} activity graph for ${selected.year}. ${total} ${labels.activities}.`}
              >
                {weeks.flat().map((day, index) => {
                  if (!day) {
                    return <span className="heatmap-cell is-blank" key={`blank-${index}`} aria-hidden="true" />;
                  }
                  const level = Math.min(4, Math.max(0, day.level));
                  return (
                    <span
                      className={`heatmap-cell level-${level}`}
                      key={day.date}
                      title={`${day.count} ${day.count === 1 ? labels.activity : labels.activities} on ${formatDay(day.date)}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="heatmap-footer">
          <p>
            {total} {labels.activities} in {selected.year}
            <span className="heatmap-swipe"> · swipe →</span>
          </p>
          <div className="heatmap-legend" aria-hidden="true">
            <span>Less</span>
            <span className="heatmap-cell level-0" />
            <span className="heatmap-cell level-1" />
            <span className="heatmap-cell level-2" />
            <span className="heatmap-cell level-3" />
            <span className="heatmap-cell level-4" />
            <span>More</span>
          </div>
          <a
            className="heatmap-link"
            href={dataset.profileUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${labels.label} profile (opens in a new tab)`}
          >
            View profile <ArrowUpRight size={12} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
