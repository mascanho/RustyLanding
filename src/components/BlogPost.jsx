import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Section from './Section';
import Header from './Header';
import Footer from './Footer';
import ButtonGradient from '../assets/svg/ButtonGradient';

const BlogPost = () => {
  const { slug } = useParams();
  const [PostComponent, setPostComponent] = useState(null);
  const [frontmatter, setFrontmatter] = useState({});
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadPost = async () => {
      try {
        const module = await import(`../blog/${slug}.mdx`);
        setPostComponent(() => module.default);
        setFrontmatter(module.frontmatter || {});
        // Try to get raw content for reading time calculation
        try {
          const response = await fetch(`/src/blog/${slug}.mdx`);
          if (response.ok) {
            const text = await response.text();
            setContent(text);
          }
        } catch (fetchError) {
          // Fallback: estimate reading time from frontmatter
          setContent(frontmatter.excerpt || '');
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
      }
    };

    loadPost();
  }, [slug]);

  // Calculate reading time
  const readingTime = useMemo(() => {
    if (!content) return null;
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  }, [content]);

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
        .prose-custom h1, .prose-custom h2, .prose-custom h3, .prose-custom h4 {
          color: #FFFFFF;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose-custom h1 {
          font-size: 2.5rem;
          line-height: 1.2;
        }
        .prose-custom h2 {
          font-size: 2rem;
          line-height: 1.3;
        }
        .prose-custom h3 {
          font-size: 1.5rem;
          line-height: 1.4;
        }
        .prose-custom p, .prose-custom li {
          color: #ADA8C3;
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .prose-custom a {
          color: #AC6AFF;
          text-decoration: none;
          transition: color 0.2s;
        }
        .prose-custom a:hover {
          color: #8b5cf6;
        }
        .prose-custom code {
          background-color: #15131D;
          color: #CAC6DD;
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
          font-family: 'Fira Code', monospace;
          font-size: 0.875rem;
        }
        .prose-custom pre {
          background: linear-gradient(135deg, #15131D 0%, #1a1625 100%);
          border: 1px solid #252134;
          border-radius: 0.75rem;
          padding: 1.5rem;
          overflow-x: auto;
          margin: 2rem 0;
          position: relative;
        }
        .prose-custom pre::before {
          content: '';
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ff5f56;
          box-shadow: 20px 0 0 #ffbd2e, 40px 0 0 #27ca3f;
        }
        .prose-custom pre code {
          background: none;
          padding: 0;
          color: #e2e8f0;
          line-height: 1.6;
        }
        .prose-custom blockquote {
          border-left: 4px solid #8b5cf6;
          padding-left: 1.5rem;
          color: #757185;
          margin: 2rem 0;
          font-style: italic;
          background: rgba(139, 92, 246, 0.05);
          padding: 1rem 1.5rem;
          border-radius: 0 0.5rem 0.5rem 0;
        }
        .prose-custom ul, .prose-custom ol {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }
        .prose-custom li {
          margin-bottom: 0.5rem;
        }
        .featured-image {
          width: 100%;
          height: 300px;
          background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
          border-radius: 1rem;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
        }
      `}</style>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />

        <Section className="custom-paddings pt-12 pb-24 lg:pt-16 lg:pb-32" crosses>
          <div className="container relative">
            {!PostComponent ? (
              <div className="bg-n-8/50 border border-n-6 rounded-[2rem] p-8 lg:p-12">
                <div className="flex items-center justify-center py-12">
                  <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                  <span className="ml-3 text-n-1">Loading article...</span>
                </div>
              </div>
            ) : (
              <article className="max-w-4xl mx-auto">
                {/* Back Navigation */}
                <Link
                  to="/blog"
                  className="inline-flex items-center text-color-1 hover:text-color-2 font-code text-sm transition-colors mb-8 group"
                >
                  <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
                  Back to Blog
                </Link>

                {/* Featured Image Placeholder */}
                <div className="featured-image mb-8">
                  <span>✨ Featured Article</span>
                </div>

                {/* Article Header */}
                <header className="mb-12">
                  {frontmatter.title && (
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                      <span className="text-gradient-1">{frontmatter.title}</span>
                    </h1>
                  )}

                  {/* Article Meta */}
                  <div className="flex items-center gap-6 mb-8 p-4 bg-n-8/40 rounded-xl border border-n-6/30">
                    {/* Author Avatar */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          {frontmatter.author?.split(' ').map(name => name[0]).join('').slice(0, 2).toUpperCase() || 'A'}
                        </span>
                      </div>
                      <div>
                        <div className="text-n-1 font-semibold">{frontmatter.author || 'Anonymous'}</div>
                        <div className="text-n-3 text-sm">Author</div>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-n-3">
                      {frontmatter.date && (
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{new Date(frontmatter.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}</span>
                        </div>
                      )}

                      {readingTime && (
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{readingTime} min read</span>
                        </div>
                      )}

                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        <span>Technical</span>
                      </div>
                    </div>
                  </div>

                  {frontmatter.excerpt && (
                    <p className="text-xl text-n-2 leading-relaxed">{frontmatter.excerpt}</p>
                  )}
                </header>

                {/* Article Content */}
                <div className="prose-custom prose lg:prose-xl max-w-none">
                  <PostComponent />
                </div>

                {/* Article Footer */}
                <footer className="mt-16 pt-8 border-t border-n-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          {frontmatter.author?.split(' ').map(name => name[0]).join('').slice(0, 2).toUpperCase() || 'A'}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-n-1">{frontmatter.author || 'Anonymous'}</div>
                        <div className="text-sm text-n-3">Author</div>
                      </div>
                    </div>

                    <Link
                      to="/blog"
                      className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                    >
                      Read More Articles
                    </Link>
                  </div>
                </footer>
              </article>
            )}
          </div>
        </Section>

        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default BlogPost;