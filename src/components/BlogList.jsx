import React, { useState } from "react";
import { Link } from "react-router-dom";
import Section from "./Section";
import Header from "./Header";
import Footer from "./Footer";
import ButtonGradient from "../assets/svg/ButtonGradient";

const BlogList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const getTagColor = (tag) => {
    const colors = {
      introduction: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
      mdx: "bg-green-500/20 text-green-300 border border-green-500/30",
      blog: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
      react: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
      javascript:
        "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
      tutorial: "bg-pink-500/20 text-pink-300 border border-pink-500/30",
    };
    return colors[tag] || "bg-n-7/60 text-n-2 border border-n-6/50";
  };

  const posts = [
    {
      slug: "website-deep-crawling",
      title: "Deep crawling of websites",
      date: "2026-01-16",
      author: "Marco Guerreiro",
      tags: ["SEO", "GEO", "SSR"],
      excerpt:
        "See how RustySEO can deeply crawl websites, including those with dynamic content, to provide comprehensive SEO analysis and insights.",
      cover: "",
    },
  ];

  const allTags = ["All", ...new Set(posts.flatMap((post) => post.tags || []))];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag =
      selectedTag === "All" || (post.tags && post.tags.includes(selectedTag));
    return matchesSearch && matchesTag;
  });

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const otherPosts = featuredPost ? posts.slice(1) : posts;

  return (
    <>
      <div>
        <Header />

        <Section className="custom-paddings  pb-24 lg:pt-16 lg:pb-32" crosses>
          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Our Blog
              </div>
              <h1 className="h1 mb-6 max-w-4xl mx-auto">
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Insights, Tutorials & Updates
                </span>
              </h1>
              <p className="body-1 max-w-2xl mx-auto text-n-3 mb-12 leading-relaxed">
                Discover cutting-edge insights, comprehensive tutorials, and the
                latest updates from the RustySEO team. Stay ahead in the world
                of SEO, web development, and digital marketing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-12 bg-n-8/60 border border-n-6/50 rounded-xl text-n-1 placeholder-n-3 focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                  <svg
                    className="w-5 h-5 text-n-3 absolute left-4 top-1/2 -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedTag === tag
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25"
                        : "bg-n-8/60 hover:bg-n-8/80 border border-n-6/50 text-n-3 hover:text-n-1 hover:border-n-6/70"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div className="flex justify-center gap-8 text-sm text-n-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>{posts.length} Articles</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Updated Daily</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Expert Authors</span>
                </div>
              </div>
            </div>

            {featuredPost && (
              <div className="mb-16">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/10 to-purple-500/20 rounded-3xl blur-3xl"></div>
                  <div className="relative bg-n-8/30 backdrop-blur-sm border border-n-6/30 rounded-3xl p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full">
                        <span className="text-purple-300 text-sm font-semibold">
                          ✨ Featured
                        </span>
                      </div>
                      <div className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-1"></div>
                    </div>

                    <Link to={`/blog/${featuredPost.slug}`} className="block">
                      <article className="max-w-4xl">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold">
                                  {featuredPost.author
                                    .split(" ")
                                    .map((name) => name[0])
                                    .join("")
                                    .slice(0, 2)
                                    .toUpperCase()}
                                </span>
                              </div>
                              <div>
                                <div className="text-n-1 font-semibold">
                                  {featuredPost.author}
                                </div>
                                <div className="text-n-3 text-sm">
                                  {new Date(
                                    featuredPost.date,
                                  ).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })}
                                </div>
                              </div>
                            </div>

                            <h2 className="h2 text-n-1 mb-4">
                              {featuredPost.title}
                            </h2>

                            {featuredPost.excerpt && (
                              <p className="body-1 text-n-3 mb-6">
                                {featuredPost.excerpt}
                              </p>
                            )}

                            <div className="flex flex-wrap gap-2 mb-6">
                              {featuredPost.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                              Read Article
                              <span className="ml-2">→</span>
                            </span>
                          </div>

                          <div className="hidden md:block">
                            <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                              <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                                  <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                  </svg>
                                </div>
                                <p className="text-n-3 text-sm">
                                  Featured Content
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="group bg-n-8/40 backdrop-blur-sm border border-n-6/30 rounded-2xl p-6 hover:bg-n-8/60 hover:border-n-6/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold">
                          {post.author
                            .split(" ")
                            .map((name) => name[0])
                            .join("")
                            .slice(0, 2)
                            .toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="text-n-1 font-semibold text-sm">
                          {post.author}
                        </div>
                        <div className="text-n-3 text-xs flex items-center gap-2">
                          <span>
                            {post.date
                              ? new Date(post.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  },
                                )
                              : "No date"}
                          </span>
                          <span>•</span>
                          <span>3 min read</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="h5 text-n-1 mb-4 line-clamp-2 group-hover:text-color-1 transition-colors">
                      <Link to={`/blog/${post.slug}`} className="block">
                        {post.title}
                      </Link>
                    </h3>

                    {post.excerpt && (
                      <p className="body-2 text-n-3 mb-6 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags?.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-color-1 hover:text-color-2 font-code text-sm transition-colors group/link"
                      >
                        Read more
                        <span className="ml-1 group-hover/link:translate-x-1 transition-transform inline-block">
                          →
                        </span>
                      </Link>
                    </div>
                  </article>
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <div className="w-16 h-16 bg-n-8/60 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      className="w-8 h-8 text-n-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="h4 text-n-1 mb-2">No Articles Found</h3>
                  <p className="body-1 text-n-3">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Section>

        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default BlogList;
