"use client";
import { useState, useEffect } from "react";

/**
 * Sidebar showing tag buttons for filtering the project feed.
 * Fetches list of tags from backend (to be implemented).
 */
export default function TagSidebar() {
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    // TODO: fetch tags from backend REST API
    setTimeout(() => {
      setTags(["JavaScript", "Python", "React", "Next.js", "Portfolio", "GameDev"]);
      setLoading(false);
    }, 400);
  }, []);

  return (
    <div>
      <div className="font-semibold mb-2">Tags</div>
      {loading ? (
        <div className="text-sm text-neutral-400">Loading tags...</div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`px-3 py-1 rounded-full text-sm border border-neutral-200 dark:border-neutral-800 bg-background hover:bg-accent/20 transition ${
                selected === tag ? "bg-primary/80 text-white" : ""
              }`}
              onClick={() => setSelected(selected === tag ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
