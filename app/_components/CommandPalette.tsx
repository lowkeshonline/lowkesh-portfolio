"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { Search, X } from "lucide-react";
import { profile } from "../_data/profile";
import { projects } from "../_data/projects";

const commands = [
  {
    label: "Work",
    detail: "Selected projects",
    href: "/#work",
    group: "Sections",
  },
  {
    label: "Activity",
    detail: "GitHub contributions",
    href: "/#activity",
    group: "Sections",
  },
  {
    label: "Experience",
    detail: "Where I have worked",
    href: "/#experience",
    group: "Sections",
  },
  {
    label: "Education",
    detail: "Where I studied",
    href: "/#education",
    group: "Sections",
  },
  {
    label: "Stack & uses",
    detail: "The tools I reach for",
    href: "/#stack",
    group: "Sections",
  },
  {
    label: "Writing",
    detail: "Notes and ideas",
    href: "/#writing",
    group: "Sections",
  },
  {
    label: "Now",
    detail: "What I am doing lately",
    href: "/#now",
    group: "Sections",
  },
  {
    label: "All projects",
    detail: "Browse every project",
    href: "/projects",
    group: "Pages",
  },
  {
    label: "All writing",
    detail: "Browse every post",
    href: "/blog",
    group: "Pages",
  },
  {
    label: "Email",
    detail: profile.email,
    href: `mailto:${profile.email}`,
    group: "Elsewhere",
  },
  {
    label: "GitHub",
    detail: "See my code",
    href: profile.github,
    group: "Elsewhere",
  },
  {
    label: "LinkedIn",
    detail: "Connect with me",
    href: profile.linkedin,
    group: "Elsewhere",
  },
  {
    label: "X",
    detail: "Short posts and notes",
    href: profile.x,
    group: "Elsewhere",
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const items = useMemo(() => {
    const projectCommands = projects.map((project) => ({
      label: project.title,
      detail: project.description,
      href: project.liveUrl || project.githubUrl,
      group: "Projects",
    }));
    const allCommands = [...commands, ...projectCommands];
    const search = query.trim().toLowerCase();
    return search
      ? allCommands.filter((item) =>
          `${item.label} ${item.detail} ${item.group}`
            .toLowerCase()
            .includes(search),
        )
      : allCommands;
  }, [query]);

  useEffect(() => {
    const isTyping = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) return false;
      return Boolean(
        target.closest("input, textarea, select, [contenteditable='true']"),
      );
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
        return;
      }

      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (
        open ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        isTyping(event.target)
      ) {
        return;
      }

      if (event.key.toLowerCase() === "w") {
        event.preventDefault();
        document
          .getElementById("work")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (event.key.toLowerCase() === "e") {
        event.preventDefault();
        window.location.href = `mailto:${profile.email}`;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      setQuery("");
      setActiveIndex(0);
      dialog.showModal();
      searchRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  function handleSearchKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (items.length === 0) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, items.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter" && items[activeIndex]) {
      event.preventDefault();
      window.location.assign(items[activeIndex].href);
      setOpen(false);
    }
  }

  return (
    <>
      <button
        className="command-trigger"
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-keyshortcuts="Meta+K Control+K"
      >
        <span>CTRL</span>
        <kbd>⌘K</kbd>
      </button>
      <dialog
        className="command-dialog"
        ref={dialogRef}
        aria-label="Search the portfolio"
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
      >
        <div className="command-box">
          <label className="command-search">
            <Search size={18} aria-hidden="true" />
            <input
              aria-label="Search sections, projects, and links"
              aria-activedescendant={
                items[activeIndex] ? `command-result-${activeIndex}` : undefined
              }
              aria-controls="command-results"
              aria-expanded="true"
              onChange={(event) => {
                setQuery(event.target.value);
                setActiveIndex(0);
              }}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search the portfolio..."
              ref={searchRef}
              role="combobox"
              value={query}
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close search"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </label>
          <div
            className="command-results"
            id="command-results"
            role="listbox"
            aria-label="Search results"
          >
            {items.length > 0 ? (
              items.map((item, index) => (
                <a
                  aria-selected={activeIndex === index}
                  className={`command-result${activeIndex === index ? " is-active" : ""}`}
                  href={item.href}
                  id={`command-result-${index}`}
                  key={`${item.group}-${item.label}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setOpen(false)}
                  role="option"
                >
                  <span className="command-result-copy">
                    <strong>{item.label}</strong>
                    <small>{item.detail}</small>
                  </span>
                  <span className="command-result-group">{item.group}</span>
                </a>
              ))
            ) : (
              <p className="command-empty">No matching pages or projects.</p>
            )}
          </div>
          <div className="command-hint">
            <span>
              <kbd>↑</kbd>
              <kbd>↓</kbd> to move
            </span>
            <span>
              <kbd>↵</kbd> to open
            </span>
            <span>
              <kbd>esc</kbd> to close
            </span>
          </div>
        </div>
      </dialog>
    </>
  );
}
