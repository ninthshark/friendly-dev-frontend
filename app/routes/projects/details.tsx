import { Link } from "react-router";
import type { Route } from "./+types/details";
import type { Project, StrapiProject, StrapiResponse } from "~/types";
import { FaArrowLeft } from "react-icons/fa";

export async function loader({ request, params }: Route.LoaderArgs) {
  const id = params.id;
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects?filters[documentId][$eq]=${id}&populate=*`
  );
  // const res = await fetch(`http://localhost:3001/projects/${params.id}`);

  if (!res.ok) {
    throw new Response("Failed to fetch project details", {
      status: res.status,
    });
  }

  const json: StrapiResponse<StrapiProject> = await res.json();

  const item = json.data[0];

  const project: Project = {
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${item.image.url}` : "/images/no-image.png",
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
  };
  // const project: Project = await res.json();
  return { project };
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const { project } = loaderData;

  return (
    <>
      <Link
        to="/projects"
        className="flex items-center text-blue-400 hover:text-blue-500 mb-6 transition"
      >
        <FaArrowLeft className="inline mr-2" />
        Back to Projects
      </Link>
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-400 mb-4">
            {project.title}
          </h1>
          <p className="text-gray-400 text-sm mb-4">
            {new Date(project.date).toLocaleDateString()} - {project.category}
          </p>
          <p className="text-gray-400 mb-6">{project.description}</p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded transition"
          >
            View Live site →
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
