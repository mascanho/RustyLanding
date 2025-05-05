import { useState } from "react";
import Section from "../Section";

export default function FormEl() {
  const [category, setCategory] = useState("Fact");
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState(null);
  const [responseDetails, setResponseDetails] = useState(null);
  const [funFact, setFunFact] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setResponse({ success: false, message: "Please enter some text" });
      return;
    }

    setIsSubmitting(true);
    setResponse(null);
    setResponseDetails(null);
    setFunFact(null);

    try {
      const response = await fetch(
        "https://server.rustyseo.com/api/quote/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ category, quote: text }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setResponse({
          success: true,
          message: data.message || "Submission successful!",
        });
        setResponseDetails(data.details || null);
        setFunFact(data.fun_fact || null);
        setText("");
      } else {
        setResponse({
          success: false,
          message: data.message || "Something went wrong",
          details: data.details || null,
        });
      }
    } catch (error) {
      setResponse({
        success: false,
        message: "Failed to submit. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section className="min-h-dvh flex flex-col items-center justify-center">
      <div className="w-full max-w-sm mx-auto p-6 rounded-lg shadow-md mt-10 bg-black">
        <h2 className="text-2xl font-bold mb-4">SEO Myth or Fact</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-purple-600"
                  checked={category === "Myth"}
                  onChange={() => setCategory("Myth")}
                />
                <span className="ml-2">Myth</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-purple-600"
                  checked={category === "Fact"}
                  onChange={() => setCategory("Fact")}
                />
                <span className="ml-2">Fact</span>
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Text
            </label>
            <textarea
              id="text"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={`Enter your ${category.toLowerCase()} here...`}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center w-full">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>

        {response && (
          <div
            className={`mt-4 p-3 rounded-md w-full ${response.success ? "bg-purple-50 text-purple-800" : "bg-red-50 text-red-800"}`}
          >
            <p>{response.message}</p>
            {funFact && (
              <p className="mt-2 text-sm italic">Fun Fact: {funFact}</p>
            )}
            {responseDetails && responseDetails.timestamp && (
              <p className="mt-2 text-xs">
                Submitted: {responseDetails.timestamp}
              </p>
            )}
          </div>
        )}
      </div>
    </Section>
  );
}
