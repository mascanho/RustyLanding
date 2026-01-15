import { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import Section from './Section';
import Header from './Header';
import Footer from './Footer';
import ButtonGradient from '../assets/svg/ButtonGradient';
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
    return <code className="bg-n-7/50 px-1.5 py-0.5 rounded text-purple-400 font-mono text-sm" {...props}>{children}</code>;
  },
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: ({ children, ...props }) => <p {...props}>{children}</p>,
  a: ({ children, href, ...props }) => (
    <a href={href} className="text-purple-400 hover:text-purple-300 no-underline hover:underline transition-all" {...props}>
      {children}
    </a>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-l-4 border-purple-500 pl-6 py-4 my-6 bg-purple-500/10 not-italic text-n-2" {...props}>
      {children}
    </blockquote>
  ),
  ul: ({ children, ...props }) => <ul {...props}>{children}</ul>,
  ol: ({ children, ...props }) => <ol {...props}>{children}</ol>,
  li: ({ children, ...props }) => <li {...props}>{children}</li>,
  strong: ({ children, ...props }) => <strong className="font-semibold text-n-1" {...props}>{children}</strong>,
  img: (props) => <BlogImage {...props} />,
  video: (props) => <BlogVideo {...props} />,
};

const BlogPost = () => {
  const { slug } = useParams();
  const [PostComponent, setPostComponent] = useState(null);
  const [frontmatter, setFrontmatter] = useState({});
  const [headings, setHeadings] = useState([]);
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState('');
  const contentRef = useRef(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const module = await import(`../blog/${slug}.mdx`);
        setPostComponent(() => module.default);
        setFrontmatter(module.frontmatter || {});
      } catch (error) {
        console.error('Error loading blog post:', error);
      }
    };

    loadPost();
  }, [slug]);

  useEffect(() => {
    const extractHeadings = () => {
      if (!contentRef.current) return;

      const elements = contentRef.current?.querySelectorAll('h1, h2, h3, h4');

      const headingsArray = Array.from(elements).map((element) => ({
        id: element.id,
        text: element.textContent,
        level: parseInt(element.tagName.substring(1))
      })).filter(h => h.id && h.text);

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

      if (contentRef.current) {
        const headings = contentRef.current?.querySelectorAll('h1, h2, h3, h4');
        let activeId = '';

        headings.forEach((heading) => {
          const rect = heading.getBoundingClientRect();
          if (rect.top <= 100) {
            activeId = heading.id;
          }
        });

        setActiveHeading(activeId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const readingTime = useMemo(() => {
    if (!frontmatter.excerpt) return null;
    const words = frontmatter.excerpt.split(/\s+/).filter(w => w.length > 0).length;
    const wordsPerMinute = 200;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  }, [frontmatter.excerpt]);

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
            <div className="grid lg:grid-cols-[1fr_280px] gap-8 lg:gap-12">
              <article className="min-w-0">
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

                <div ref={contentRef} className="prose prose-lg prose-invert max-w-none">
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

              {headings.length > 0 && (
                <aside className="hidden lg:block">
                  <nav className="sticky top-32 w-[280px]">
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
                              const element = document.getElementById(heading.id);
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }
                            }}
                            className={`block py-1 transition-colors ${
                              activeHeading === heading.id
                                ? 'text-color-1 font-medium'
                                : 'text-n-3 hover:text-n-1'
                            }`}
                            style={{
                              paddingLeft: `${Math.max(0, (heading.level - 2) * 12)}px`
                            }}
                          >
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </aside>
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

export default BlogPost;