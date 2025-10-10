"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useMediaQuery } from "@/Hooks/UseMediaQuery"; // Path to your custom hook
import BlogCard from "./BlogCard"; // Assuming the BlogCard component is in the same directory

interface BlogGridProps {
  blogs: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  }[];
  classNames?: {
    card?: string;
    image?: string;
    title?: string;
    description?: string;
  };
}

const BlogGrid: React.FC<BlogGridProps> = ({ blogs, classNames }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className="">
      {/* Mobile view: Swiper carousel */}
      {isMobile ? (
        <Swiper spaceBetween={16} slidesPerView={1} className="!px-4" centeredSlides loop>
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <BlogCard
                imageSrc={blog.imageSrc}
                imageAlt={blog.imageAlt}
                title={blog.title}
                description={blog.description}
                containerClassName={classNames?.card}
                imageClassName={classNames?.image}
                titleClassName={classNames?.title}
                descriptionClassName={classNames?.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // Desktop view: Grid layout
        <div className="hidden z-20 relative lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-0">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              imageSrc={blog.imageSrc}
              imageAlt={blog.imageAlt}
              title={blog.title}
              description={blog.description}
              containerClassName={classNames?.card}
              imageClassName={classNames?.image}
              titleClassName={classNames?.title}
              descriptionClassName={classNames?.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
