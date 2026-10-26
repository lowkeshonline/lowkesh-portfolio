import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { formatPostDate, getAllPosts, readingTime } from "./_utils/mdx";
import { projects } from "./_data/projects";
import {
  education,
  experience,
  now,
  principle,
  profile,
} from "./_data/profile";
import SectionHeading from "./_components/SectionHeading";
import SiteFooter from "./_components/SiteFooter";
import WorkList from "./_components/WorkList";
import Activity from "./_components/Activity";
import UsesPanel from "./_components/UsesPanel";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const projectCount = String(projects.length).padStart(2, "0");
  const postCount = String(posts.length).padStart(2, "0");

  return (
    <>
      <main className="site-main" id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-inner">
            <h1 className="hero-name" id="hero-title">
              <span className="hero-line">{profile.firstName}</span>
              <span className="hero-line">
                {profile.lastName}
                <span className="hero-period">.</span>
              </span>
            </h1>

            <div className="hero-copy">
              <p className="hero-lede">
                Hi, I&apos;m Lokesh. I build web products — dashboards,
                marketplaces, and the occasional experiment.
              </p>
              <p className="hero-detail">
                I&apos;m finishing an MCA at Marwadi University, and I&apos;ve
                spent the last year building marketplace features at Shipturtle
                Apps. I care about interfaces that feel quiet, fast, and
                obvious.
              </p>
            </div>

            <div className="hero-hints" aria-label="Keyboard shortcuts">
              <span className="hero-hint">
                <span>Press</span>
                <kbd>W</kbd>
                <span>for work</span>
              </span>
              <span className="hero-hint">
                <span>Press</span>
                <kbd>E</kbd>
                <span>for email</span>
              </span>
              <span className="hero-hint">
                <kbd>⌘</kbd>
                <kbd>K</kbd>
                <span>for everything</span>
              </span>
            </div>

            <div className="hero-foot">
              <span className="hero-foot-info">
                <span className="hero-role">Software engineer</span>{" "}
                <span aria-hidden="true">·</span>{" "}
                <span className="hero-location">
                  <MapPin size={11} aria-hidden="true" />
                  Hyderabad, IN
                </span>
              </span>
              <a href="#work">
                Scroll <ArrowDown size={12} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-heading">
          <div className="container">
            <SectionHeading
              count={`${projectCount} projects`}
              description="Selected products and experiments — shipped to real users, or close enough to show."
              id="work-heading"
              number="01"
              title="Work"
            />
            <WorkList />
            <div className="section-more">
              <Link href="/projects">
                All projects <ArrowUpRight size={13} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="section"
          id="activity"
          aria-labelledby="activity-heading"
        >
          <div className="container">
            <SectionHeading
              count="GitHub · LeetCode"
              description="What I've been shipping lately, pulled from GitHub and LeetCode."
              id="activity-heading"
              number="02"
              title="Activity"
            />
            <Activity />
          </div>
        </section>

        <section
          className="section"
          id="experience"
          aria-labelledby="experience-heading"
        >
          <div className="container">
            <SectionHeading
              count="01 role"
              description="Where I've worked and what I actually touched."
              id="experience-heading"
              number="03"
              title="Experience"
            />
            <div className="timeline">
              {experience.map((item) => (
                <article
                  className="timeline-row"
                  key={`${item.company}-${item.period}`}
                >
                  <span className="timeline-period">{item.period}</span>
                  <div className="timeline-main">
                    <h3 className="timeline-title">
                      {item.role}{" "}
                      <span className="timeline-company">· {item.company}</span>
                    </h3>
                    <ul className="timeline-points">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section"
          id="education"
          aria-labelledby="education-heading"
        >
          <div className="container">
            <SectionHeading
              count="02 degrees"
              description="The formal part. The rest happened in the terminal."
              id="education-heading"
              number="04"
              title="Education"
            />
            <div className="education-list">
              {education.map((item) => (
                <article className="education-row" key={item.degree}>
                  <span className="education-period">{item.period}</span>
                  <div className="education-main">
                    <h3>{item.degree}</h3>
                    <p>
                      {item.school} · {item.place}
                    </p>
                  </div>
                  <span className="education-result">{item.result}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="stack" aria-labelledby="stack-heading">
          <div className="container">
            <SectionHeading
              count="05 groups"
              description="The tools I reach for most. A small stack, chosen slowly and changed only when something is clearly better."
              id="stack-heading"
              number="05"
              title="Stack & uses"
            />
            <UsesPanel />
          </div>
        </section>

        <section
          className="section"
          id="writing"
          aria-labelledby="writing-heading"
        >
          <div className="container">
            <SectionHeading
              count={`${postCount} ${posts.length === 1 ? "post" : "posts"}`}
              description="Notes from building, debugging, and learning in public."
              id="writing-heading"
              number="06"
              title="Writing"
            />
            {posts.length > 0 ? (
              <div className="writing-list">
                {posts.map((post) => (
                  <Link
                    className="writing-row"
                    href={`/blog/${post.slug}`}
                    key={post.slug}
                  >
                    <span className="writing-date">
                      {formatPostDate(post.frontmatter.date)}
                    </span>
                    <div className="writing-main">
                      <h3>{post.frontmatter.title}</h3>
                      <p>{post.frontmatter.summary}</p>
                    </div>
                    <span className="writing-meta">
                      {readingTime(post.content)} min{" "}
                      <ArrowUpRight size={12} aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="empty-note">No notes published yet.</p>
            )}
            <div className="section-more">
              <Link href="/blog">
                All writing <ArrowUpRight size={13} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="section section-last"
          id="now"
          aria-labelledby="now-heading"
        >
          <div className="container">
            <SectionHeading
              count="Oct ’26"
              description="The short version of what I'm doing right now."
              id="now-heading"
              number="07"
              title="Now"
            />
            <div className="now-grid">
              <div className="now-card">
                {now.map((item) => (
                  <div className="now-row" key={item.key}>
                    <span className="now-key">{item.key}</span>
                    <span className="now-value">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="now-principle">
                <span className="now-label">Working principle</span>
                <p>{principle}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
