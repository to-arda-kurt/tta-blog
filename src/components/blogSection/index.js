import React, { useContext } from "react";
import BlogContext from "../../context/blogContext";

export const BlogSection = (props) => {
  const blogContext = useContext(BlogContext);
  const { blogPosts } = blogContext;

  console.log(blogPosts);

  return (
    <section className="py-4 my-4 bg-orange-500 dark:bg-black dark:border-2 dark:border-orange-500 dark:border-color-orange-500 rounded-lg p-8">
      <div>
        <h2 className="text-2xl italic text-white dark:text-white my-8">
          Latest {props.type} News
        </h2>
      </div>

      <div>
        {blogPosts.map((post) => (
          <div>
            <img className="w-80" src={post.images[0]} alt={post.title} />
            <h1>{post.title}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};
