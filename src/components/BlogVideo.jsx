const BlogVideo = ({ src, title, poster, className = '' }) => {
  return (
    <figure className={`my-8 ${className}`}>
      <div className="relative overflow-hidden rounded-2xl bg-n-8/50 border border-n-6/30 shadow-xl shadow-purple-500/10">
        <video
          src={src}
          poster={poster}
          controls
          preload="metadata"
          className="w-full h-auto"
          title={title || 'Blog video'}
        >
          Your browser does not support the video tag.
        </video>
        {title && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-white font-semibold">{title}</h3>
          </div>
        )}
      </div>
    </figure>
  );
};

export default BlogVideo;