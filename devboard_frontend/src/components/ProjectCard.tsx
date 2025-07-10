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
    <div className="rounded-lg border bg-background p-4 shadow-sm flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <Link href={`/profile/${project.user.username}`}>
          <span className="font-semibold text-primary hover:underline">
            @{project.user.username}
          </span>
        </Link>
        <button
          onClick={handleLike}
          className="flex items-center gap-1 px-2 py-1 bg-accent/80 rounded-full text-white text-xs hover:bg-accent transition cursor-pointer"
          aria-label="Like project"
        >
          <span>★</span> {likes}
        </button>
      </div>
      <div className="font-bold text-lg">{project.title}</div>
      <div className="text-sm text-neutral-600 dark:text-neutral-300">{project.description}</div>
      <div className="flex flex-wrap gap-1 mt-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
