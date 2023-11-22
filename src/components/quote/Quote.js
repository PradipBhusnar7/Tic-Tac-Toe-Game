import React, { useState, useEffect } from "react";
import quotes from "./quotes.css"

function Quote() {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setQuote(data.slip.advice);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();

    const intervalId = setInterval(fetchQuote, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="quote">
        <p className="hashOne">Quote #1</p>
        <p className="message">{`"${quote}"`}</p>
        <div className="ellipse">
          <div className="square1"></div>
          <div className="square2"></div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
