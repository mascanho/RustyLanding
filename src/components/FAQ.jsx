import { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { plusSquare } from "../assets";

const FAQ = () => {
  const [activeItem, setActiveItem] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: "What is RustySEO?",
      answer:
        "RustySEO is a comprehensive SEO analysis tool built with Rust that provides crawling, analysis, log parsing and reporting capabilities for websites. It combines multiple SEO tools into one efficient application.",
    },
    {
      id: 2,
      question: "Is RustySEO free to use?",
      answer:
        "Yes, RustySEO is open-source and free to use. However, some API integrations may require their own API keys and subscriptions from third-party services.",
    },
    {
      id: 3,
      question: "What platforms does RustySEO support?",
      answer:
        "RustySEO runs on Windows, macOS, and Linux. It can analyze websites hosted on any platform regardless of the server technology (WordPress, React, Angular, etc.).",
    },
    {
      id: 4,
      question: "What makes RustySEO different from other SEO tools?",
      answer:
        "RustySEO is built with Rust, which provides superior performance and efficiency compared to traditional SEO tools. It is designed to be lightweight, fast, and user-friendly while offering powerful features for both technical SEO and content analysis.",
    },
    {
      id: 5,
      question: "How can I get involved in the RustySEO community?",
      answer:
        "You can get involved by visiting our GitHub repository, where you can contribute to the codebase, report issues, and participate in discussions. We welcome contributions from developers, marketers, and SEO professionals who want to help improve RustySEO.",
    },
    {
      id: 6,
      question: "What is RustySEO's ethos?",
      answer:
        "RustySEO is built with the ethos of being open-source, transparent, and community-driven. We believe in empowering users with powerful SEO tools while maintaining privacy and security. We are committed to continuous improvement and welcome contributions from the community.",
    },
    // {
    //   id: 7,
    //   question: "Why does RustySEO exist?",
    //   answer:
    //     "RustySEO was created out of frustration with existing SEO tools that were often bloated, expensive, and lacked transparency. We wanted to build a tool that was fast, efficient, and open-source, giving users control over their SEO data and analysis without the limitations of traditional software.",
    // },
  ];

  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <Section className="overflow-hidden" id="faq">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Frequently Asked Questions"
          text="Find answers to common questions about RustySEO and its features."
        />

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="relative mb-4 p-0.5 rounded-2xl bg-gradient-to-br from-n-6 via-n-6 to-n-7 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="bg-n-8/90 backdrop-blur-xl rounded-[15px] overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-n-7/50 transition-colors duration-200"
                >
                  <h3 className="h6 text-n-1 pr-8">{item.question}</h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-n-6 transition-transform duration-300 ${
                      activeItem === item.id ? "rotate-45" : ""
                    }`}
                  >
                    <img
                      src={plusSquare}
                      width={16}
                      height={16}
                      alt="Plus"
                      className="transition-transform duration-300"
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeItem === item.id ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="body-2 text-n-4 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="mt-10 text-center">
            <p className="body-2 text-n-4 mb-4">Still have questions?</p>
            <Button href="https://github.com/mascanho/RustySEO/issues" white>
              Contact Support
            </Button>
          </div>*/}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
