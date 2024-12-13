"use client";
import { useEffect } from "react";

function CalendlyWidget() {
  useEffect(() => {
    // Function to load the Calendly script
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    };

    // Call the function to load the script
    loadScript();

    // Optional: Cleanup function to remove the script when the component unmounts
    return () => {
      // Find the script in the document and remove it
      document
        .querySelectorAll(
          'script[src="https://assets.calendly.com/assets/external/widget.js"]'
        )
        .forEach((el) => el.remove());
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/latino-web-studio/web-check-in"
      style={{ minWidth: 320, height: 700 }}
    ></div>
  );
}

export default CalendlyWidget;
