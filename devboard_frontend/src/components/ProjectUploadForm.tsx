"use client";
/**
 * Placeholder form for uploading or editing a project.
 * Connects to backend REST for project submission.
 */
export default function ProjectUploadForm() {
  return (
    <form className="flex flex-col gap-5 p-7 rounded-2xl bg-[var(--muted-bg)] border border-[var(--border)] shadow-md max-w-xl mx-auto">
      <input
        required
        className="border border-[var(--border)] rounded-lg px-4 py-2 text-base shadow-sm focus:outline-none focus:border-primary transition"
        placeholder="Project title"
        name="title"
        autoComplete="off"
      />
      <textarea
        required
        className="border border-[var(--border)] rounded-lg px-4 py-2 text-base shadow-sm focus:outline-none focus:border-primary transition"
        placeholder="Short description"
        name="description"
        rows={3}
        autoComplete="off"
      />
      <input
        className="border border-[var(--border)] rounded-lg px-4 py-2 text-base shadow-sm focus:outline-none focus:border-primary transition"
        placeholder="Tags (comma-separated)"
        name="tags"
        autoComplete="off"
      />
      <div>
        <button
          type="submit"
          className="bg-primary hover:bg-primary/95 text-white px-6 py-2.5 rounded-lg font-bold text-base shadow transition focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Upload Project
        </button>
      </div>
    </form>
  );
}
