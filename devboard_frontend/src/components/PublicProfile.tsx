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
      <div className="flex items-center gap-4 mb-8">
        <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center text-3xl text-white">
          {username.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <div className="text-2xl font-bold">{username}</div>
          <div className="text-neutral-400">@{username}</div>
        </div>
      </div>
      <div>
        <div className="font-bold text-xl mb-4">Projects</div>
        {/* TODO: map over user's projects */}
        <div className="text-neutral-500 italic">Coming soon…</div>
      </div>
    </div>
  );
}
