import { useState } from "react";
import type { Route } from "./+types/index";
import type { Project, StrapiProject, StrapiResponse } from "~/types";
import ProjectCard from "~/components/ProjectCard";
import Pagination from "~/components/Pagination";
import { AnimatePresence, motion } from "motion/react";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects?populate=*`
  );
  const json: StrapiResponse<StrapiProject> = await res.json();

  const projects = json.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${item.image.url}` : "/images/no-image.png",
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
  }));

  return { projects };
}

const ProjectPage = ({ loaderData }: Route.ComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of projects per page

  const { projects } = loaderData as { projects: Project[] };

  // Get unique categories from projects
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter projects by selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Calculate the total pages
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  // Get current pages projects
  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  return (
    <>
      <h2 className="text-3xl text-gray font-bold mb-8">🚀 My Projects</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded text-sm cursor-pointer ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div layout className="grid gap-6 sm:grid-cols-2">
          {currentProjects.map((project) => (
            <motion.div key={project.id} layout>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ProjectPage;
