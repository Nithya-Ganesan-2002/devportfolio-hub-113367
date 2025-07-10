"use client";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  likes: number;
  user: {
    username: string;
    avatarUrl?: string;
  };
  imageUrl?: string;
}

/**
 * Displays a feed/grid of projects, optionally with search/filter inputs.
 */
export default function ProjectFeed({
  showSearch,
}: {
  showSearch?: boolean;
}) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: fetch projects from backend REST API
    setTimeout(() => {
      setProjects([
        {
          id: "p1",
          title: "Portfolio Site",
          description: "Modern dev portfolio built with Next.js.",
          tags: ["Next.js", "React", "Portfolio"],
          likes: 13,
          user: { username: "johndoe" },
          imageUrl: "",
        },
        {
          id: "p2",
          title: "Retro Game",
          description: "A pixel-art platformer coded in JavaScript!",
          tags: ["GameDev", "JavaScript"],
          likes: 7,
          user: { username: "janedev" },
          imageUrl: "",
        },
      ]);
      setLoading(false);
    }, 400);
  }, []);

  return (
    <div className="flex flex-col gap-5">
      {showSearch && (
        <input
          className="w-full border rounded-md px-3 py-2 mb-2 text-base"
          placeholder="Search projects…"
          // TODO: implement search logic
        />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-lg bg-neutral-100 dark:bg-neutral-800 h-40 animate-pulse" />
            ))
          : projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
      </div>
    </div>
  );
}
