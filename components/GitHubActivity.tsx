"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { Github, Star, GitFork, ExternalLink, Code2 } from "lucide-react";

interface ContributionDay {
    date: string;
    count: number;
    level: number; // 0-4
}

interface ContributionWeek {
    days: ContributionDay[];
}

interface Repo {
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    topics: string[];
}

interface GitHubProfile {
    public_repos: number;
    followers: number;
    following: number;
}

const GITHUB_USERNAME = "raakanaka";

const LANG_COLORS: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    CSS: "#563d7c",
    HTML: "#e34c26",
    Python: "#3572A5",
    PHP: "#4F5D95",
    Vue: "#41b883",
    Dart: "#00B4AB",
    Shell: "#89e051",
};

// Generate contribution graph from GitHub Events API
function generateContributionData(): ContributionWeek[] {
    const weeks: ContributionWeek[] = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - (52 * 7)); // 52 weeks back

    let currentDate = new Date(startDate);
    // Align to Sunday
    currentDate.setDate(currentDate.getDate() - currentDate.getDay());

    while (currentDate <= today) {
        const week: ContributionDay[] = [];
        for (let d = 0; d < 7; d++) {
            const dateStr = currentDate.toISOString().split("T")[0];
            week.push({ date: dateStr, count: 0, level: 0 });
            currentDate.setDate(currentDate.getDate() + 1);
        }
        weeks.push({ days: week });
    }
    return weeks;
}

function getMonthLabels(weeks: ContributionWeek[]): { label: string; index: number }[] {
    const months: { label: string; index: number }[] = [];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let lastMonth = -1;

    weeks.forEach((week, i) => {
        const firstDay = week.days[0];
        if (firstDay) {
            const month = new Date(firstDay.date).getMonth();
            if (month !== lastMonth) {
                months.push({ label: monthNames[month], index: i });
                lastMonth = month;
            }
        }
    });
    return months;
}

const CELL_SIZE = 11;
const CELL_GAP = 3;
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

export default function GitHubActivity() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [contributions, setContributions] = useState<ContributionWeek[]>([]);
    const [profile, setProfile] = useState<GitHubProfile | null>(null);
    const [totalContributions, setTotalContributions] = useState(0);
    const [loading, setLoading] = useState(true);
    const [hoveredCell, setHoveredCell] = useState<ContributionDay | null>(null);

    const fetchData = useCallback(async () => {
        try {
            // Fetch repos
            const repoRes = await fetch(
                `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6&type=owner`
            );
            const repoData: Repo[] = await repoRes.json();
            setRepos(repoData.filter((r) => !r.name.startsWith(".")));

            // Fetch profile
            const profileRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
            const profileData = await profileRes.json();
            setProfile(profileData);

            // Fetch events for contribution graph approximation
            const weeks = generateContributionData();
            const eventsRes = await fetch(
                `https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=100`
            );
            const events = await eventsRes.json();

            let total = 0;
            if (Array.isArray(events)) {
                events.forEach((event: { type: string; created_at: string; payload?: { commits?: unknown[] } }) => {
                    const eventDate = event.created_at.split("T")[0];
                    let count = 1;
                    if (event.type === "PushEvent" && event.payload?.commits) {
                        count = (event.payload.commits as unknown[]).length;
                    }
                    // Find the matching day in weeks
                    for (const week of weeks) {
                        for (const day of week.days) {
                            if (day.date === eventDate) {
                                day.count += count;
                                total += count;
                            }
                        }
                    }
                });
            }

            // Assign levels (0-4) based on count
            const maxCount = Math.max(1, ...weeks.flatMap((w) => w.days.map((d) => d.count)));
            weeks.forEach((week) => {
                week.days.forEach((day) => {
                    if (day.count === 0) day.level = 0;
                    else if (day.count <= maxCount * 0.25) day.level = 1;
                    else if (day.count <= maxCount * 0.5) day.level = 2;
                    else if (day.count <= maxCount * 0.75) day.level = 3;
                    else day.level = 4;
                });
            });

            setContributions(weeks);
            setTotalContributions(total);
        } catch (err) {
            console.error("Failed to fetch GitHub data", err);
            setContributions(generateContributionData());
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const levelColors = [
        "#161b22", // 0 - empty
        "#0e4429", // 1
        "#006d32", // 2
        "#26a641", // 3
        "#39d353", // 4
    ];

    const monthLabels = getMonthLabels(contributions);
    // Show only last ~25 weeks on mobile
    const visibleWeeks = contributions.slice(-26);
    const visibleMonthLabels = getMonthLabels(visibleWeeks);

    return (
        <section className="section" id="github-activity" style={{ background: "var(--card-bg)" }}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <h2
                        className="text-3xl md:text-4xl font-extrabold mb-3"
                        style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
                    >
                        GitHub <span className="text-accent-pop">Activity</span>
                    </h2>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1.0625rem" }}>
                        Open source contributions & active repositories
                    </p>
                </motion.div>

                {/* Contribution Graph */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="github-graph-container"
                >
                    <div className="github-graph-header">
                        <div className="flex items-center gap-2">
                            <Github size={18} style={{ color: "var(--text-secondary)" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                {totalContributions > 0 ? `${totalContributions} contributions in the last year` : "Contributions in the last year"}
                            </span>
                        </div>
                        {profile && (
                            <div className="github-stats-mini">
                                <span>{profile.public_repos} repos</span>
                                <span>·</span>
                                <span>{profile.followers} followers</span>
                            </div>
                        )}
                    </div>

                    {loading ? (
                        <div className="github-graph-loading">
                            <div className="github-graph-skeleton" />
                        </div>
                    ) : (
                        <>
                            {/* Desktop graph (full 52 weeks) */}
                            <div className="github-graph-scroll github-graph-desktop">
                                <svg
                                    width={contributions.length * (CELL_SIZE + CELL_GAP) + 40}
                                    height={7 * (CELL_SIZE + CELL_GAP) + 30}
                                >
                                    {/* Month labels */}
                                    {monthLabels.map((m) => (
                                        <text
                                            key={`m-${m.index}`}
                                            x={m.index * (CELL_SIZE + CELL_GAP) + 36}
                                            y={10}
                                            fontSize={10}
                                            fill="var(--text-secondary)"
                                            fontFamily="var(--font-body)"
                                        >
                                            {m.label}
                                        </text>
                                    ))}
                                    {/* Day labels */}
                                    {DAY_LABELS.map((label, di) => (
                                        <text
                                            key={`dl-${di}`}
                                            x={0}
                                            y={di * (CELL_SIZE + CELL_GAP) + 28}
                                            fontSize={9}
                                            fill="var(--text-secondary)"
                                            fontFamily="var(--font-body)"
                                            dominantBaseline="middle"
                                        >
                                            {label}
                                        </text>
                                    ))}
                                    {/* Cells */}
                                    {contributions.map((week, wi) =>
                                        week.days.map((day, di) => {
                                            const today = new Date();
                                            const dayDate = new Date(day.date);
                                            if (dayDate > today) return null;
                                            return (
                                                <rect
                                                    key={day.date}
                                                    x={wi * (CELL_SIZE + CELL_GAP) + 30}
                                                    y={di * (CELL_SIZE + CELL_GAP) + 18}
                                                    width={CELL_SIZE}
                                                    height={CELL_SIZE}
                                                    rx={2}
                                                    fill={levelColors[day.level]}
                                                    stroke={day.level > 0 ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)"}
                                                    strokeWidth={0.5}
                                                    style={{ cursor: "pointer" }}
                                                    onMouseEnter={() => setHoveredCell(day)}
                                                    onMouseLeave={() => setHoveredCell(null)}
                                                />
                                            );
                                        })
                                    )}
                                </svg>
                            </div>

                            {/* Mobile graph (last 26 weeks) */}
                            <div className="github-graph-scroll github-graph-mobile">
                                <svg
                                    width={visibleWeeks.length * (CELL_SIZE + CELL_GAP) + 40}
                                    height={7 * (CELL_SIZE + CELL_GAP) + 30}
                                >
                                    {visibleMonthLabels.map((m) => (
                                        <text
                                            key={`mm-${m.index}`}
                                            x={m.index * (CELL_SIZE + CELL_GAP) + 36}
                                            y={10}
                                            fontSize={10}
                                            fill="var(--text-secondary)"
                                            fontFamily="var(--font-body)"
                                        >
                                            {m.label}
                                        </text>
                                    ))}
                                    {DAY_LABELS.map((label, di) => (
                                        <text
                                            key={`dml-${di}`}
                                            x={0}
                                            y={di * (CELL_SIZE + CELL_GAP) + 28}
                                            fontSize={9}
                                            fill="var(--text-secondary)"
                                            fontFamily="var(--font-body)"
                                            dominantBaseline="middle"
                                        >
                                            {label}
                                        </text>
                                    ))}
                                    {visibleWeeks.map((week, wi) =>
                                        week.days.map((day, di) => {
                                            const today = new Date();
                                            const dayDate = new Date(day.date);
                                            if (dayDate > today) return null;
                                            return (
                                                <rect
                                                    key={day.date}
                                                    x={wi * (CELL_SIZE + CELL_GAP) + 30}
                                                    y={di * (CELL_SIZE + CELL_GAP) + 18}
                                                    width={CELL_SIZE}
                                                    height={CELL_SIZE}
                                                    rx={2}
                                                    fill={levelColors[day.level]}
                                                    stroke={day.level > 0 ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)"}
                                                    strokeWidth={0.5}
                                                />
                                            );
                                        })
                                    )}
                                </svg>
                            </div>

                            {/* Legend + Tooltip */}
                            <div className="github-graph-footer">
                                {hoveredCell && hoveredCell.count > 0 ? (
                                    <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                                        {hoveredCell.count} contribution{hoveredCell.count !== 1 ? "s" : ""} on{" "}
                                        {new Date(hoveredCell.date).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </span>
                                ) : (
                                    <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                                        Hover to see activity
                                    </span>
                                )}
                                <div className="github-legend">
                                    <span className="text-xs" style={{ color: "var(--text-secondary)" }}>Less</span>
                                    {levelColors.map((c, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                width: 10,
                                                height: 10,
                                                borderRadius: 2,
                                                background: c,
                                                border: "0.5px solid rgba(255,255,255,0.05)",
                                            }}
                                        />
                                    ))}
                                    <span className="text-xs" style={{ color: "var(--text-secondary)" }}>More</span>
                                </div>
                            </div>
                        </>
                    )}
                </motion.div>

                {/* Active Repositories */}
                <div className="mt-10">
                    <h3
                        className="text-xl font-bold mb-6 flex items-center gap-2"
                        style={{ color: "var(--foreground)" }}
                    >
                        <Code2 size={20} style={{ color: "var(--accent)" }} />
                        Active Repositories
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {loading
                            ? Array.from({ length: 6 }).map((_, i) => (
                                  <div key={i} className="github-repo-skeleton" />
                              ))
                            : repos.map((repo, i) => (
                                  <motion.a
                                      key={repo.name}
                                      href={repo.html_url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      initial={{ opacity: 0, y: 20 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ duration: 0.4, delay: i * 0.08 }}
                                      className="card-brutal github-repo-card group"
                                  >
                                      <div className="github-repo-card-header">
                                          <div className="flex items-center gap-2 min-w-0">
                                              <Github size={16} style={{ color: "var(--text-secondary)", flexShrink: 0 }} />
                                              <span
                                                  className="text-sm font-bold truncate"
                                                  style={{ color: "var(--accent-dark)" }}
                                              >
                                                  {repo.name}
                                              </span>
                                          </div>
                                          <ExternalLink
                                              size={14}
                                              style={{ color: "var(--text-secondary)", flexShrink: 0, transition: "transform 0.2s" }}
                                              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                          />
                                      </div>
                                      <p
                                          className="text-xs leading-relaxed mb-4"
                                          style={{
                                              color: "var(--text-secondary)",
                                              display: "-webkit-box",
                                              WebkitLineClamp: 2,
                                              WebkitBoxOrient: "vertical",
                                              overflow: "hidden",
                                              minHeight: "2.5em",
                                          }}
                                      >
                                          {repo.description || "No description provided."}
                                      </p>
                                      <div className="github-repo-meta">
                                          {repo.language && (
                                              <span className="github-repo-lang">
                                                  <span
                                                      className="github-lang-dot"
                                                      style={{
                                                          background: LANG_COLORS[repo.language] || "#8b949e",
                                                      }}
                                                  />
                                                  {repo.language}
                                              </span>
                                          )}
                                          {repo.stargazers_count > 0 && (
                                              <span className="github-repo-stat">
                                                  <Star size={12} /> {repo.stargazers_count}
                                              </span>
                                          )}
                                          {repo.forks_count > 0 && (
                                              <span className="github-repo-stat">
                                                  <GitFork size={12} /> {repo.forks_count}
                                              </span>
                                          )}
                                      </div>
                                  </motion.a>
                              ))}
                    </div>
                </div>

                {/* View all on GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-10"
                >
                    <a
                        href={`https://github.com/${GITHUB_USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-brutal"
                        style={{ fontSize: "0.875rem" }}
                    >
                        <Github size={16} /> View All on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
