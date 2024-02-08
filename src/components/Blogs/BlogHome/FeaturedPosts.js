import React from "react";
import { sortBlogs } from "@/src/utils/index";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return <section className="w-full sm:mt-24 mt-24 md:mt-32 px-5 md:px-24 sm:px-10 flex flex-col items-center justify-center">
    <h2 className="w-full inline-block font-bold capitalize text-4xl md:text-4xl text-dark dark:text-light sm:text-center">Featured Posts</h2>

    <div className="grid grid-cols-2 lg:grid-cols-1 grid-rows-2 gap-6  mt-10 sm:mt-16 ">
      <article className="col-span-1 w-full h-full lg:col-span-2 row-span-2 relative ">
        <BlogLayoutOne blog={sortedBlogs[1]} />
      </article>
      <article className="col-span-1 lg:col-span-2 row-span-1 relative">
                <BlogLayoutTwo blog={sortedBlogs[2]} />

      </article>
      <article className="col-span-1 lg:col-span-2 row-span-1 relative">
                <BlogLayoutTwo blog={sortedBlogs[3]} />

      </article>
    </div>
  </section>;
};
export default FeaturedPosts;
