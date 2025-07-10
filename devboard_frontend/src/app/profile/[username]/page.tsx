/* eslint-disable @typescript-eslint/no-explicit-any */
import PublicProfile from "@/components/PublicProfile";

/**
 * Dynamic profile page for [username].
 * "params" is typed as any due to possible custom/incorrect PageProps constraint conflict.
 */
export default function Page({ params }: { params: any }) {
  const { username } = params;
  return (
    <div className="pt-12 max-w-3xl mx-auto">
      <PublicProfile username={username} />
    </div>
  );
}
