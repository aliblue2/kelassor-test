"use client";

import { blog } from "@/utils/database/blog";
import Carousel from "../Ui/Carousel";
import { groupFn } from "@/utils/groupFn";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";

//TripleCarousel component
const TripleCarousel = ({ blogs }: { blogs: blog[] }) => {
  const [isDesktop, setisDesktop] = useState(false);
  useEffect(() => {
    if (window && window.innerWidth > 768) setisDesktop(true);
  }, []);
  return (
    <Carousel>
      {isDesktop
        ? groupFn(blogs).map((item, i) => (
            <div key={i} className="flex gap-5 h-[400px]">
              {item.map((item2) => (
                <BlogCard
                  key={item2.id}
                  title={item2.title}
                  description={item2.description}
                  link={item2.slug}
                  image={item2.banner}
                />
              ))}
            </div>
          ))
        : blogs.map((item) => (
            <div key={item.id} className="flex h-[400px]">
              <BlogCard
                title={item.title}
                description={item.description}
                link={item.slug}
                image={item.banner}
              />
            </div>
          ))}
    </Carousel>
  );
};

export default TripleCarousel;
