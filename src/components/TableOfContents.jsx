const TableOfContents = ({ headings }) => {
  const [activeId, setActiveId] = useState('');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className={`lg:fixed lg:right-8 lg:top-32 lg:w-64 transition-all duration-300 ${isSticky ? 'lg:opacity-100' : 'lg:opacity-0'}`}>
      <div className="hidden lg:block">
        <h3 className="text-sm font-semibold text-n-1 mb-4 uppercase tracking-wider">
          Contents
        </h3>
        <ul className="space-y-2 text-sm border-l border-n-6/30 pl-4">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={`block py-1 transition-colors ${
                  activeId === heading.id
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
      </div>
    </nav>
  );
};

export default TableOfContents;