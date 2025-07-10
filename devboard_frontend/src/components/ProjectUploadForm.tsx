"use client";
/**
 * Placeholder form for uploading or editing a project.
 * Connects to backend REST for project submission.
 */
export default function ProjectUploadForm() {
  return (
    <form className="flex flex-col gap-4 p-6 rounded-lg bg-background border shadow-sm">
      <input
        required
        className="border rounded px-3 py-2"
        placeholder="Project title"
        name="title"
      />
      <textarea
        required
        className="border rounded px-3 py-2"
        placeholder="Short description"
        name="description"
        rows={3}
      />
      <input
        className="border rounded px-3 py-2"
        placeholder="Tags (comma-separated)"
        name="tags"
      />
      <div>
        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded font-semibold"
        >
          Upload Project
        </button>
      </div>
    </form>
  );
}
