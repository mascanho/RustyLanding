import React from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';
import Header from './Header';
import Footer from './Footer';
import ButtonGradient from '../assets/svg/ButtonGradient';

// Import all MDX files from the blog folder
const blogModules = import.meta.glob('../blog/*.mdx', { eager: true });

const BlogList = () => {
  const posts = Object.entries(blogModules).map(([path, module]) => {
    const slug = path.split('/').pop().replace('.mdx', '');
    return {
      slug,
      title: module.frontmatter?.title || 'Untitled',
      date: module.frontmatter?.date || '',
      excerpt: module.frontmatter?.excerpt || '',
    };
  });

  return (
    <>
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .text-gradient-1 {
          background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />

        <Section className="custom-paddings pt-12 pb-24 lg:pt-16 lg:pb-32" crosses>
          <div className="container relative flex flex-col lg:flex-row gap-10">
            <main className="lg:w-full min-h-[50vh]">
              <div className="bg-n-8/50 border border-n-6 rounded-[2rem] p-8 lg:p-12">
                <h1 className="h2 mb-6 text-gradient-1">Blog</h1>
                <div className="space-y-8">
                  {posts.length > 0 ? posts.map((post) => (
                    <article key={post.slug} className="bg-n-8/60 border border-n-6/50 rounded-2xl p-6 hover:bg-n-8/80 hover:border-n-6/70 transition-all duration-300 hover:shadow-lg">
                      <h2 className="h4 text-n-1 mb-3">
                        <Link to={`/blog/${post.slug}`} className="hover:text-color-1 transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      {post.date && (
                        <p className="text-n-3 text-sm mb-3">{post.date}</p>
                      )}
                      {post.excerpt && (
                        <p className="body-1 text-n-3 mb-4">{post.excerpt}</p>
                      )}
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-color-1 hover:text-color-2 font-code text-sm transition-colors"
                      >
                        Read more
                        <span className="ml-2">→</span>
                      </Link>
                    </article>
                  )) : (
                    <div className="text-center py-12">
                      <p className="body-1 text-n-3">No blog posts found.</p>
                    </div>
                  )}
                </div>
              </div>
            </main>
          </div>
        </Section>

        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default BlogList;