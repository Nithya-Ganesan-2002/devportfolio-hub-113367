"use client";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  project: {
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
  };
}

/**
 * Card displaying a single project with title, description, tag badges, like button, and owner link.
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  const [likes, setLikes] = useState(project.likes);

  // Dummy like click handler; TODO: connect to backend API.
  function handleLike() {
    setLikes((v) => v + 1);
    // TODO: call backend REST endpoint.
  }

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--muted-bg)] p-5 shadow hover:shadow-md flex flex-col gap-3 transition-shadow group">
      <div className="flex justify-between items-center">
        <Link href={`/profile/${project.user.username}`}>
          <span className="font-semibold text-primary hover:underline">
            @{project.user.username}
          </span>
        </Link>
        <button
          onClick={handleLike}
          className="flex items-center gap-1 px-3 py-1 bg-accent/90 rounded-full text-white text-xs font-semibold hover:bg-accent hover:scale-105 transition cursor-pointer shadow active:scale-100"
          aria-label="Like project"
        >
          <span style={{fontSize:'1.08em'}}>★</span> {likes}
        </button>
      </div>
      <div className="font-bold text-xl leading-tight truncate">{project.title}</div>
      <div className="text-[1rem] text-[var(--secondary)] line-clamp-3">{project.description}</div>
      <div className="flex flex-wrap gap-2 mt-1">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
