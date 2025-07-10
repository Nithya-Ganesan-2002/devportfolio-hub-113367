import PublicProfile from "@/components/PublicProfile";

export default function Page(props: { params: { username: string } }) {
  // Defensive: Ensure params is not a Promise (diagnostic, will not run in prod)
  if (
    typeof props.params === "object" &&
    props.params !== null &&
    typeof (props.params as any).then === "function"
  ) {
    throw new Error("params unexpectedly is a Promise!");
  }
  const { username } = props.params;
  return (
    <div className="pt-8">
      <PublicProfile username={username} />
    </div>
  );
}
