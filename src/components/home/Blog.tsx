'use client';
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { BsBookmark, BsClock } from 'react-icons/bs';
import SectionBadge from '@/components/ui/SectionBadge';

const blogPosts = [
  {
    image: '/assets/home/blog-1.png',
    category: 'Insights',
    readTime: '12 min',
    title: 'Top AI Tools Transforming\nEmail Productivity',
    description:
      'Implementing project management software helps teams track progress, set deadlines,\u2026',
  },
  {
    image: '/assets/home/blog-2.png',
    category: 'Automation',
    readTime: '09 min',
    title: 'Why Smart Inbox Sorting\nCan 5\u00d7 Your Productivity',
    description:
      'This integration fosters transparency and accountability, making it easier to manage\u2026',
  },
  {
    image: '/assets/home/blog-3.png',
    category: 'AI Trends',
    readTime: '06 min',
    title: '7 Ways AI Agents Improve\nDaily Email',
    description:
      'Communication tools are evolving beyond simple messaging platforms. AI-powered\u2026',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Blog: React.FC = () => {
  return (
    <section id="blogs" className="relative flex flex-col items-center justify-center px-5 md:px-10 py-16 md:py-24 overflow-hidden w-full">
      <motion.div
        className="flex flex-col items-center gap-16 max-w-sm md:max-w-7xl w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className="flex flex-col items-center gap-4 w-full">
          <motion.div variants={itemVariants}>
            <SectionBadge icon={BsBookmark} label="Our Blogs" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl tracking-tight text-dark-200 text-center font-semibold"
          >
            News, insights and more
          </motion.h2>
        </div>

        <motion.div variants={itemVariants} className="w-full">
          <div className="relative w-full border border-base-400">
            <div className="absolute -top-1.25 -left-1.25 w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-20" />
            <div className="absolute -top-1.25 -right-1.25 w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-20" />
            <div className="absolute -bottom-1.25 -left-1.25 w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-20" />
            <div className="absolute -bottom-1.25 -right-1.25 w-2.5 h-2.5 bg-white rounded-xs shadow-dot z-20" />

            <div className="absolute -left-12 md:-left-20 top-0 w-12 md:w-20 h-px bg-linear-to-l from-base-400 to-transparent" />
            <div className="absolute -right-12 md:-right-20 top-0 w-12 md:w-20 h-px bg-linear-to-r from-base-400 to-transparent" />
            <div className="absolute -left-12 md:-left-20 bottom-0 w-12 md:w-20 h-px bg-linear-to-l from-base-400 to-transparent" />
            <div className="absolute -right-12 md:-right-20 bottom-0 w-12 md:w-20 h-px bg-linear-to-r from-base-400 to-transparent" />

            <div className="absolute left-0 -top-16 md:-top-28 w-px h-16 md:h-28 bg-linear-to-t from-base-400 to-transparent" />
            <div className="absolute right-0 -top-16 md:-top-28 w-px h-16 md:h-28 bg-linear-to-t from-base-400 to-transparent" />
            <div className="absolute left-0 -bottom-16 md:-bottom-28 w-px h-16 md:h-28 bg-linear-to-b from-base-400 to-transparent" />
            <div className="absolute right-0 -bottom-16 md:-bottom-28 w-px h-16 md:h-28 bg-linear-to-b from-base-400 to-transparent" />

            <div className="bg-base-200 grid grid-cols-1 md:grid-cols-3 gap-3.5 p-2.5">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-3xl pt-1 px-1 shadow-sm flex flex-col"
                >
                  <div className="relative w-full aspect-356/204 rounded-2xl overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </div>

                  <div className="flex flex-col gap-8 p-5">
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-2.5">
                        <div className="flex items-center gap-1">
                          <BsBookmark className="w-4 h-4 text-base-900" />
                          <span className="text-sm text-base-900">{post.category}</span>
                        </div>
                        <div className="w-px h-4 bg-base-500" />
                        <div className="flex items-center gap-1">
                          <BsClock className="w-4 h-4 text-base-900" />
                          <span className="text-sm text-base-900">{post.readTime}</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2.5">
                        <h3 className="text-lg font-semibold text-dark-200 whitespace-pre-line">
                          {post.title}
                        </h3>
                        <p className="text-sm text-base-900">{post.description}</p>
                      </div>
                    </div>

                    <button className="bg-base-100 rounded-full p-px w-fit cursor-pointer group hover:bg-base-300 transition-colors">
                      <div className="flex items-center gap-1 rounded-full pl-3.5 pr-2.5 py-2.5 overflow-hidden">
                        <span className="text-sm text-dark-200 whitespace-nowrap">View Blog</span>
                        <IoChevronForwardOutline className="w-4 h-4 text-dark-200 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Blog;
