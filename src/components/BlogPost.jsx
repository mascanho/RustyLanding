import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MDXProvider, useMDXComponents } from '@mdx-js/react';
import Section from './Section';
import Header from './Header';
import Footer from './Footer';
import ButtonGradient from '../assets/svg/ButtonGradient';
import CodeBlock from './CodeBlock';
import BlogImage from './BlogImage';
import BlogVideo from './BlogVideo';
import PreCode from './PreCode';
import { H1, H2, H3, H4 } from './MDXHeadings';

const components = {
  pre: PreCode,
  code: ({ className, children, ...props }) => {
    const isBlockCode = className && className.startsWith('language-');
    if (isBlockCode) {
      return <code className={className} {...props}>{children}</code>;
    }
    return <code className="bg-n-8 px-1 py-0.5 rounded text-pink-400 font-mono text-sm" {...props}>{children}</code>;
  },
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: ({ children, ...props }) => <p className="mb-4 leading-relaxed text-n-3" {...props}>{children}</p>,
  a: ({ children, href, ...props }) => (
    <a href={href} className="text-purple-400 hover:text-purple-300 underline decoration-purple-400/30 hover:decoration-purple-400/50 underline-offset-2 transition-colors" {...props}>
      {children}
    </a>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-l-4 border-purple-500 pl-4 py-2 my-6 bg-purple-500/5 italic text-n-2" {...props}>
      {children}
    </blockquote>
  ),
  ul: ({ children, ...props }) => <ul className="list-disc list-inside mb-4 space-y-2 text-n-3" {...props}>{children}</ul>,
  ol: ({ children, ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-n-3" {...props}>{children}</ol>,
  li: ({ children, ...props }) => <li className="ml-4" {...props}>{children}</li>,
  strong: ({ children, ...props }) => <strong className="font-semibold text-n-1" {...props}>{children}</strong>,
  img: (props) => <BlogImage {...props} />,
  video: (props) => <BlogVideo {...props} />,
};

const BlogPost = () => {
  const { slug } = useParams();
  const [PostComponent, setPostComponent] = useState(null);
  const [frontmatter, setFrontmatter] = useState({});
  const [content, setContent] = useState('');
  const [headings, setHeadings] = useState([]);
  const [readingProgress, setReadingProgress] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const module = await import(`../blog/${slug}.mdx`);
        console.log('Loaded module:', module);
        console.log('PostComponent:', module.default);
        console.log('Frontmatter:', module.frontmatter);
        setPostComponent(() => module.default);
        setFrontmatter(module.frontmatter || {});
        try {
          const response = await fetch(`/src/blog/${slug}.mdx`);
          if (response.ok) {
            const text = await response.text();
            setContent(text);
          }
        } catch (fetchError) {
          setContent(frontmatter.excerpt || '');
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
      }
    };

    loadPost();
  }, [slug, frontmatter]);

  useEffect(() => {
    const extractHeadings = () => {
      if (!contentRef.current) return;

      const elements = contentRef.current?.querySelectorAll('h1, h2, h3, h4');
      const headingsArray = Array.from(elements).map((element) => ({
        id: element.id || element.textContent.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''),
        text: element.textContent,
        level: parseInt(element.tagName.substring(1))
      }));

      setHeadings(headingsArray);
    };

    const timer = setTimeout(() => {
      extractHeadings();
    }, 100);

    return () => clearTimeout(timer);
  }, [PostComponent]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const readingTime = useMemo(() => {
    if (!content) return null;
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  }, [content]);

  if (!PostComponent) {
    return (
      <>
        <div className="pt-[4.75rem] lg:pt-[5.25rem]">
          <Header />
          <Section className="custom-paddings pt-12 pb-24">
            <div className="container relative">
              <div className="bg-n-8/50 border border-n-6 rounded-[2rem] p-8 lg:p-12">
                <div className="flex items-center justify-center py-12">
                  <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                  <span className="ml-3 text-n-1">Loading article...</span>
                </div>
              </div>
            </div>
          </Section>
          <Footer />
        </div>
        <ButtonGradient />
      </>
    );
  }

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />

        <div className="fixed top-0 left-0 right-0 h-1 bg-n-8/80 z-50">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-150"
            style={{ width: `${readingProgress}%` }}
          />
        </div>

        <Section className="custom-paddings pt-12 pb-24 lg:pt-16 lg:pb-32" crosses>
          <div className="container relative">
            <div className="grid lg:grid-cols-[1fr_auto] gap-12">
              <article className="max-w-4xl mx-auto lg:mx-0">
                <Link
                  to="/blog"
                  className="inline-flex items-center text-color-1 hover:text-color-2 font-code text-sm transition-colors mb-8 group"
                >
                  <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
                  Back to Blog
                </Link>

                {frontmatter.cover && (
                  <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden">
                    <BlogImage
                      src={frontmatter.cover}
                      alt={frontmatter.title}
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                )}

                <header className="mb-12">
                  {frontmatter.title && (
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                      <span style={{
                        background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                        {frontmatter.title}
                      </span>
                    </h1>
                  )}

                  <div className="flex flex-wrap items-center gap-6 mb-8 p-6 bg-n-8/40 rounded-xl border border-n-6/30">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">
                          {frontmatter.author?.split(' ').map(name => name[0]).join('').slice(0, 2).toUpperCase() || 'A'}
                        </span>
                      </div>
                      <div>
                        <div className="text-n-1 font-semibold">{frontmatter.author || 'Anonymous'}</div>
                        <div className="text-n-3 text-sm">Author</div>
                      </div>
                    </div>

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

                      {frontmatter.tags && frontmatter.tags.length > 0 && (
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          </svg>
                          <span>{frontmatter.tags[0]}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {frontmatter.excerpt && (
                    <p className="text-xl text-n-2 leading-relaxed border-l-4 border-purple-500 pl-6 bg-purple-500/5 py-4 rounded-r-lg">
                      {frontmatter.excerpt}
                    </p>
                  )}
                </header>

                <div ref={contentRef} className="prose prose-lg max-w-none">
                  <style jsx>{`
                    .prose h1 {
                      color: #ffffff;
                      font-weight: 700;
                      font-size: 2.25rem;
                      line-height: 2.5rem;
                      margin-top: 2rem;
                      margin-bottom: 1rem;
                      scroll-margin-top: 6rem;
                    }
                    .prose h2 {
                      color: #ffffff;
                      font-weight: 600;
                      font-size: 1.875rem;
                      line-height: 2.25rem;
                      margin-top: 2rem;
                      margin-bottom: 1rem;
                      scroll-margin-top: 6rem;
                    }
                    .prose h3 {
                      color: #ffffff;
                      font-weight: 600;
                      font-size: 1.5rem;
                      line-height: 2rem;
                      margin-top: 1.75rem;
                      margin-bottom: 0.75rem;
                      scroll-margin-top: 6rem;
                    }
                    .prose h4 {
                      color: #ffffff;
                      font-weight: 600;
                      font-size: 1.25rem;
                      line-height: 1.75rem;
                      margin-top: 1.5rem;
                      margin-bottom: 0.5rem;
                      scroll-margin-top: 6rem;
                    }
                    .prose p {
                      margin-bottom: 1.25rem;
                      line-height: 1.75;
                    }
                    .prose code {
                      background-color: #15131d;
                      color: #cac6dd;
                      padding: 0.125rem 0.375rem;
                      border-radius: 0.25rem;
                      font-family: 'Fira Code', monospace;
                      font-size: 0.875rem;
                    }
                    .prose pre {
                      background: linear-gradient(135deg, #15131d 0%, #1a1625 100%);
                      border: 1px solid #252134;
                      border-radius: 0.75rem;
                      padding: 0;
                      margin: 2rem 0;
                      overflow-x: auto;
                    }
                    .prose pre code {
                      background: none;
                      padding: 0;
                      color: #e2e8f0;
                      line-height: 1.6;
                    }
                    .prose blockquote {
                      border-left: 4px solid #8b5cf6;
                      padding-left: 1.5rem;
                      color: #757185;
                      margin: 2rem 0;
                      font-style: italic;
                      background: rgba(139, 92, 246, 0.05);
                      padding: 1rem 1.5rem;
                      border-radius: 0 0.5rem 0.5rem 0;
                    }
                    .prose ul, .prose ol {
                      margin: 1.5rem 0;
                      padding-left: 1.5rem;
                    }
                    .prose li {
                      margin-bottom: 0.5rem;
                    }
                  `}</style>
                  <MDXProvider components={components}>
                    <PostComponent />
                  </MDXProvider>
                </div>

                <footer className="mt-16 pt-8 border-t border-n-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
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

                    <div className="flex gap-4">
                      <button
                        className="p-2 rounded-lg bg-n-8/60 hover:bg-n-8 transition-colors"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      >
                        <svg className="w-5 h-5 text-n-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                      </button>
                      <Link
                        to="/blog"
                        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                      >
                        Read More Articles
                      </Link>
                    </div>
                  </div>
                </footer>
              </article>

              <aside className="hidden lg:block">
                <nav className="sticky top-32">
                  <h3 className="text-sm font-semibold text-n-1 mb-4 uppercase tracking-wider">
                    Table of Contents
                  </h3>
                  <ul className="space-y-2 text-sm border-l border-n-6/30 pl-4">
                    {headings.map((heading) => (
                      <li key={heading.id}>
                        <a
                          href={`#${heading.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }}
                          className={`block py-1 transition-colors ${
                            window.location.hash === `#${heading.id}`
                              ? 'text-color-1 font-medium'
                              : 'text-n-3 hover:text-n-1'
                          }`}
                          style={{
                            paddingLeft: `${(heading.level - 2) * 12 + 4}px`
                          }}
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            </div>
          </div>
        </Section>

        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default BlogPost;