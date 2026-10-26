import SocialLinks from "./SocialLinks";
import ThemeToggle from "./ThemeToggle";

export default function SocialDock() {
  return (
    <aside className="social-dock" aria-label="Find me elsewhere">
      <SocialLinks />
      <span className="dock-divider" aria-hidden="true" />
      <ThemeToggle />
    </aside>
  );
}
