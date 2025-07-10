import ProjectFeed from "@/components/ProjectFeed";

/**
 * Home page: displays the latest/public projects.
 */
export default function Home() {
  return (
    <div className="py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 tracking-tight leading-tight">
        Discover <span className="text-primary">Developer Projects</span>
      </h1>
      <ProjectFeed showSearch />
    </div>
  );
}
