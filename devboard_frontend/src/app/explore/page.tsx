import ProjectFeed from "@/components/ProjectFeed";
import TagSidebar from "@/components/TagSidebar";

/**
 * Explore projects with tag filter and search.
 */
export default function ExplorePage() {
  return (
    <div className="flex flex-col md:flex-row gap-10 pt-8 max-w-6xl mx-auto">
      <aside className="w-full md:w-64 mb-8 md:mb-0">
        <TagSidebar />
      </aside>
      <section className="flex-1 flex flex-col">
        <ProjectFeed showSearch showFilter />
      </section>
    </div>
  );
}
