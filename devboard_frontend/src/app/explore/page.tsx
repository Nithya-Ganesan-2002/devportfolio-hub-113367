import ProjectFeed from "@/components/ProjectFeed";
import TagSidebar from "@/components/TagSidebar";

/**
 * Explore projects with tag filter and search.
 */
export default function ExplorePage() {
  return (
    <div className="flex flex-col md:flex-row gap-8 pt-6">
      <aside className="w-full md:w-64">
        <TagSidebar />
      </aside>
      <section className="flex-1">
        <ProjectFeed showSearch showFilter />
      </section>
    </div>
  );
}
