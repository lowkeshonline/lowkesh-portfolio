"use client";

import { useState, type KeyboardEvent } from "react";
import LocalClock from "./LocalClock";

const groups = {
  web: {
    command: "lokesh --uses web",
    rows: [
      ["stack", "next.js · react · vue.js"],
      ["visuals", "tailwind css · shadcn"],
      ["deploy", "Vercel"],
    ],
  },
  shell: {
    command: "lokesh --uses shell",
    rows: [
      ["shell", "zsh + oh-my-zsh"],
      ["type", "starship · two-line, time + git branch"],
      ["term", "ghostty"],
      ["mux", "tmux + herdr"],
    ],
  },
  data: {
    command: "lokesh --uses data",
    rows: [
      ["relational", "postgresql · mysql"],
      ["document", "mongodb"],
      ["platform", "supabase"],
    ],
  },
  tools: {
    command: "lokesh --uses tools",
    rows: [
      ["vcs", "git · gitHub"],
      ["api", "postman"],
      ["ai", "codex · deepseek · t3code"],
      ["deploy", "vercel"],
    ],
  },
};

type Group = keyof typeof groups;
const groupNames = Object.keys(groups) as Group[];

export default function UsesPanel() {
  const [activeGroup, setActiveGroup] = useState<Group>("web");
  const active = groups[activeGroup];

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, group: Group) {
    const currentIndex = groupNames.indexOf(group);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight")
      nextIndex = (currentIndex + 1) % groupNames.length;
    else if (event.key === "ArrowLeft")
      nextIndex = (currentIndex - 1 + groupNames.length) % groupNames.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = groupNames.length - 1;
    else return;

    event.preventDefault();
    const nextGroup = groupNames[nextIndex];
    setActiveGroup(nextGroup);
    document.getElementById(`uses-tab-${nextGroup}`)?.focus();
  }

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="terminal-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="terminal-title">lokesh@portfolio — zsh</span>
        <LocalClock className="terminal-time" />
      </div>

      <div className="terminal-body">
        <p className="terminal-command">
          <span className="terminal-prompt">$</span>
          <span>{active.command}</span>
          <span className="terminal-caret" aria-hidden="true" />
        </p>

        <div
          className="terminal-tabs"
          role="tablist"
          aria-label="Stack categories"
        >
          {groupNames.map((group) => (
            <button
              aria-controls="uses-panel"
              aria-selected={activeGroup === group}
              className="terminal-tab"
              id={`uses-tab-${group}`}
              key={group}
              onClick={() => setActiveGroup(group)}
              onKeyDown={(event) => handleTabKey(event, group)}
              role="tab"
              tabIndex={activeGroup === group ? 0 : -1}
              type="button"
            >
              {group}
            </button>
          ))}
        </div>

        <dl
          aria-labelledby={`uses-tab-${activeGroup}`}
          className="terminal-output"
          id="uses-panel"
          key={activeGroup}
          role="tabpanel"
        >
          {active.rows.map(([key, value]) => (
            <div className="terminal-row" key={key}>
              <dt>{key}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
