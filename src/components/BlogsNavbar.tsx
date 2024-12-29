"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
const blogsNavbar = [
  { title: "Blog 1", slug: "/blog-1" },
  { title: "Blog 2", slug: "/blog-2" },
  { title: "Blog 3", slug: "/blog-3" },
  { title: "Blog 4", slug: "/blog-4" },
];

function BlogsNavbar() {
  const pathname = usePathname();
  return (
    <div>
      <ul className="text-xl flex justify-center gap-8 p-5">
        {blogsNavbar.map((blog) => {
            const isActive = pathname.startsWith(`/blog${blog.slug}`)
          return (
            <li key={blog.title}>
              <Link className={isActive ? "text-cyan-400 font-semibold" : "hover:text-gray-400"} href={`/blog/${blog.slug}`}>
                {blog.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BlogsNavbar;
