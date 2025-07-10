"use client";
/**
 * Displays a public user profile and lists their projects.
 * To be populated via backend API.
 */
// PUBLIC_INTERFACE
export default function PublicProfile({ username }: { username: string }) {
  // TODO: fetch user and projects from backend for 'username'
  return (
    <div>
      <div className="flex items-center gap-6 mb-10">
        <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center text-3xl text-white font-bold shadow-inner border-4 border-white">
          {username.slice(0, 2).toUpperCase()}
        </div>
        <div className="min-w-0">
          <div className="text-3xl font-extrabold truncate">{username}</div>
          <div className="text-[var(--secondary)] text-lg font-mono">@{username}</div>
        </div>
      </div>
      <section>
        <div className="font-semibold text-xl mb-4">Projects</div>
        {/* TODO: map over user's projects */}
        <div className="text-neutral-400 italic">Coming soon…</div>
      </section>
    </div>
  );
}
