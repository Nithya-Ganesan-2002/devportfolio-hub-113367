import ProjectFeed from "@/components/ProjectFeed";

/**
 * Home page: displays the latest/public projects.
 */
export default function Home() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold mb-5">Discover Developer Projects</h1>
      <ProjectFeed showSearch />
    </div>
  );
}
