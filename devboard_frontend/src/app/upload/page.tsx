import ProjectUploadForm from "@/components/ProjectUploadForm";

/**
 * Project upload and management page.
 */
export default function UploadPage() {
  return (
    <div className="max-w-2xl mx-auto pt-12">
      <h1 className="text-2xl font-bold mb-6">Upload a Project</h1>
      <ProjectUploadForm />
    </div>
  );
}
