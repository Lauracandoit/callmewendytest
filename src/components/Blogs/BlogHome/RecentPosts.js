import React from "react";
import { sortBlogs } from "@/src/utils/index";
import Link from "next/link";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-32 px-32 sm:px-10 flex flex-col items-center justify-center  ">
      <div className="flex w-full justify-between sm:flex-col sm:text-center ">
        <h2 className="w-full inline-block font-bold capitalize text-4xl text-dark dark:text-light  ">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-accent underline underline-offset-2 text-lg"
        >
          view all
        </Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-1 grid-rows-3 gap-16 mt-16">
        {sortedBlogs.slice(5, 11).map((blog, index) => {
          return (
            <aritcle key={index} className="col-span-1 row-span-1 relative ">
              <BlogLayoutThree blog={blog} basePath="." />
            </aritcle>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
