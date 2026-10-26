import Link from "next/link";
import { MapPin } from "lucide-react";
import { profile } from "../_data/profile";
import CommandPalette from "./CommandPalette";
import LocalClock from "./LocalClock";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="status-bar">
        <div className="status-left">
          <Link className="status-est" href="/">
            EST. {profile.established}
          </Link>
          <span className="status-sep" aria-hidden="true">·</span>
          <span>{profile.version}</span>
          <span className="status-sep" aria-hidden="true">·</span>
          <span>Oct &apos;26</span>
        </div>
        <div className="status-center">
          <span className="status-dot" aria-hidden="true" />
          <LocalClock className="status-clock" />
          <span className="status-zone">{profile.timeZoneLabel}</span>
        </div>
        <div className="status-right">
          <span className="status-location">
            <MapPin size={10} aria-hidden="true" />
            {profile.shortLocation}
          </span>
          <CommandPalette />
        </div>
      </div>
    </header>
  );
}
