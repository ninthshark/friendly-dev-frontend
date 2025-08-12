import { useState } from "react";
import type { Route } from "./+types";
import type { Post, StrapiResponse, StrapiProject, StrapiPost } from "~/types";
import PostCard from "~/components/PostCard";
import Pagination from "~/components/Pagination";
import PostFilter from "~/components/PostFilter";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: Post[] }> {
  // const url = new URL("/posts-meta.json", request.url);
  // const response = await fetch(url.href);
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/posts?populate=image&sort=date:desc`
  );
  const json: StrapiResponse<StrapiPost> = await response.json();

  const posts = json.data.map((item) => ({
    id: item.id,
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt,
    date: item.date,
    image: item.image?.url ? `${item.image.url}` : "/images/no-image.png",
    body: "", // Add default body property for Post type
  }));

  if (!response.ok) {
    throw new Response("Failed to load posts metadata", {
      status: response.status,
    });
  }

  return {
    posts,
  };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;
  const { posts } = loaderData;
  const filteredPosts = posts.filter((post) => {
    // post.title.toLowerCase().includes(searchQuery.toLowerCase())
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query)
    );
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900">
      <h2 className="text-3xl text-white font-bold mb-8">My Blog</h2>
      <PostFilter
        searchQuery={searchQuery}
        onSearchChange={(query) => {
          // Implement search functionality here
          setSearchQuery(query);
          setCurrentPage(1); // Reset to first page on search change
        }}
      />

      <div className="space-y-8">
        {currentPosts.length === 0 ? (
          <p className="text-gray-400 text-center">No posts found.</p>
        ) : (
          currentPosts.map((post) => <PostCard key={post.slug} post={post} />)
        )}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default BlogPage;
