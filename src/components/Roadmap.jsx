import Button from './Button';
import Heading from './Heading';
import Section from './Section';
import Tagline from './Tagline';
import { roadmap } from '../constants';
import { check2, grid, loading1 } from '../assets';
import { Gradient } from './design/Roadmap';

const formatDate = (date, status) => {
  if (status === 'progress') {
    return 'In Progress';
  }
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays < 30) {
    return `${diffDays} days ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
};

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we're working on" />

        <div className="grid gap-6 md:grid-cols-2 pb-10">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                className={`group relative p-0.5 rounded-[2rem] transition-all hover:scale-[1.01] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"
                  }`}
                key={item.id}
              >
                <div className="relative p-8 bg-n-8 rounded-[1.9rem] overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <img
                      className="w-full h-full object-cover"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>

                  <div className="relative z-1 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <Tagline>{formatDate(item.date, item.status)}</Tagline>

                      <div className="flex items-center px-3 py-1 bg-n-1 rounded-full text-n-8 text-xs font-bold uppercase tracking-wider">
                        <img
                          className="mr-1.5"
                          src={item.status === "done" ? check2 : loading1}
                          width={14}
                          height={14}
                          alt={status}
                        />
                        {status}
                      </div>
                    </div>

                    <div className="mb-6 rounded-xl overflow-hidden shadow-lg border border-n-1/10 group-hover:border-n-1/20 transition-colors">
                      <img
                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                        src={item.imageUrl}
                        width={628}
                        height={426}
                        alt={item.title}
                      />
                    </div>

                    <h4 className="h4 mb-3">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <Gradient />
        </div>

        <div className="flex justify-center mt-10">
          <Button target="_blank" href="https://github.com/mascanho/RustySEO">
            View full roadmap
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
