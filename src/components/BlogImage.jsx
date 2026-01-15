const BlogImage = ({ src, alt, caption, className = '' }) => {
  return (
    <figure className={`my-8 ${className}`}>
      <div className="relative overflow-hidden rounded-2xl bg-n-8/50 border border-n-6/30">
        <img
          src={src}
          alt={alt || 'Blog image'}
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-n-3 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default BlogImage;