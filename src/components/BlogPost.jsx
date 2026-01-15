import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Section from './Section';
import Header from './Header';
import Footer from './Footer';
import ButtonGradient from '../assets/svg/ButtonGradient';

const BlogPost = () => {
  const { slug } = useParams();
  const [PostComponent, setPostComponent] = useState(null);
  const [frontmatter, setFrontmatter] = useState({});

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
        .prose-custom h1, .prose-custom h2, .prose-custom h3 {
          color: #FFFFFF;
        }
        .prose-custom p, .prose-custom li {
          color: #ADA8C3;
        }
        .prose-custom a {
          color: #AC6AFF;
        }
        .prose-custom code {
          background-color: #15131D;
          color: #CAC6DD;
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
          font-family: 'Fira Code', monospace;
        }
        .prose-custom pre {
          background-color: #15131D;
          border: 1px solid #252134;
          border-radius: 0.5rem;
          padding: 1rem;
          overflow-x: auto;
        }
        .prose-custom pre code {
          background: none;
          padding: 0;
        }
        .prose-custom blockquote {
          border-left: 4px solid #8b5cf6;
          padding-left: 1rem;
          color: #757185;
        }
      `}</style>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />

        <Section className="custom-paddings pt-12 pb-24 lg:pt-16 lg:pb-32" crosses>
          <div className="container relative flex flex-col lg:flex-row gap-10">
            <main className="lg:w-full min-h-[50vh]">
              {!PostComponent ? (
                <div className="bg-n-8/50 border border-n-6 rounded-[2rem] p-8 lg:p-12">
                  <p className="body-1 text-n-3 text-center">Loading...</p>
                </div>
              ) : (
                <div className="bg-n-8/50 border border-n-6 rounded-[2rem] p-8 lg:p-12">
                  <Link
                    to="/blog"
                    className="inline-flex items-center text-color-1 hover:text-color-2 font-code text-sm transition-colors mb-6"
                  >
                    <span className="mr-2">←</span>
                    Back to Blog
                  </Link>
                  <article className="prose-custom prose lg:prose-xl max-w-none">
                    {frontmatter.title && (
                      <h1 className="h2 mb-4 text-gradient-1">{frontmatter.title}</h1>
                    )}
                    {frontmatter.date && (
                      <p className="text-n-3 text-sm mb-6">{frontmatter.date}</p>
                    )}
                    <PostComponent />
                  </article>
                </div>
              )}
            </main>
          </div>
        </Section>

        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default BlogPost;