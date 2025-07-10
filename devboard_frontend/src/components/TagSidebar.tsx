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
              className={`px-3 py-1 rounded-full text-sm font-semibold border border-[var(--border)] bg-[var(--muted-bg)] hover:bg-accent/10 hover:border-accent/50 transition 
                ${selected === tag ? "bg-primary text-white border-primary" : "text-primary"}
              `}
              onClick={() => setSelected(selected === tag ? null : tag)}
              type="button"
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
