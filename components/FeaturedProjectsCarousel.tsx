"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { iconColors, projects } from "../lib/projects";

const featuredProjectSlugs = [
  "polosinaja",
  "midiatek",
  "svingolf-apparel",
  "haloexpert",
  "ekspora",
  "kapten-seo",
  "monster-diving",
  "vox-ai-indonesia",
  "halalfun",
];

const AUTO_ROTATE_MS = 5000;
const VISIBLE_PROJECTS = 3;

export default function FeaturedProjectsCarousel() {
  const featuredProjects = useMemo(
    () =>
      featuredProjectSlugs
        .map((slug) => projects.find((project) => project.slug === slug))
        .filter((project): project is NonNullable<typeof project> => Boolean(project)),
    [],
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featuredProjects.length);
    }, AUTO_ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [featuredProjects.length]);

  const visibleProjects = Array.from({ length: VISIBLE_PROJECTS }, (_, offset) => {
    const index = (activeIndex + offset) % featuredProjects.length;
    return { project: featuredProjects[index], index };
  });

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % featuredProjects.length);
  };

  return (
    <div className="featured-carousel" aria-label="Featured projects carousel">
      <div className="featured-carousel-toolbar">
        <div className="featured-carousel-status">
          <span>Rotates every 5 seconds</span>
          <span lang="id">Berganti otomatis setiap 5 detik</span>
        </div>

        <div className="featured-carousel-controls">
          <button type="button" onClick={goToPrevious} aria-label="Show previous featured projects">
            <ChevronLeft size={18} />
          </button>
          <button type="button" onClick={goToNext} aria-label="Show next featured projects">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="featured-carousel-grid">
        {visibleProjects.map(({ project, index }, cardIndex) => (
          <a
            key={`${project.slug}-${activeIndex}`}
            href={`/projects/${project.slug}`}
            className="card-brutal featured-carousel-card"
            style={{
              animationDelay: `${cardIndex * 80}ms`,
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="icon-circle" style={{ background: iconColors[index % iconColors.length].bg }}>
                <span style={{ fontSize: "1.25rem" }}>{project.emoji}</span>
              </div>
              <ArrowUpRight
                size={18}
                className="featured-carousel-arrow"
                aria-hidden="true"
              />
            </div>

            <p className="featured-carousel-industry">{project.industry}</p>
            <h3>{project.title}</h3>
            <p className="featured-carousel-copy">{project.summary.en}</p>
            <p className="featured-carousel-copy" lang="id">{project.summary.id}</p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tag) => (
                <span className="chip" key={tag}>{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <div className="featured-carousel-dots" aria-label="Choose featured project group">
        {featuredProjects.map((project, index) => (
          <button
            key={project.slug}
            type="button"
            aria-label={`Show ${project.title}`}
            aria-current={activeIndex === index ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
