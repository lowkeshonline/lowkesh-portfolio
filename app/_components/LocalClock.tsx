"use client";

import { useEffect, useState } from "react";
import { profile } from "../_data/profile";

export default function LocalClock({ className = "" }: { className?: string }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const timer = window.setInterval(update, 1_000);
    return () => window.clearInterval(timer);
  }, []);

  if (!now) {
    return <time className={className}>--:--:--</time>;
  }

  return (
    <time className={className} dateTime={now.toISOString()}>
      {new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23",
        timeZone: profile.timeZone,
      }).format(now)}
    </time>
  );
}
