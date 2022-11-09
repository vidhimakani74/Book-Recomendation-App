import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDatabase = {
  Selfhelp: [
    {
      name: "The Power Of Positive Thinking by Norman Vincent Peale",
      rating: "4.5/5"
    },
    { name: "How to Win Friends and Influence People", rating: "4.5/5" },
    { name: "Think and Grow Rich", rating: "4.18/5" }
  ],

  Romance: [
    { name: "The Fault in Our Stars", rating: "4.16/5" },
    { name: "The Love Hypothesis", rating: "4.28/5" },
    { name: "The promise", rating: "4.3/5" }
  ],

  Horror: [
    { name: "American Psycho, rating", rating: "3.82/5" },
    { name: "1984", rating: "4.19/5" },
    { name: "A Clockwork Orange", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedType, setType] = useState("Selfhelp");

  function genreClickHandler(type) {
    setType(type);
  }

  return (
    <div className="App">
      <h2
        style={{
          background: "#fee2e2",
          margin: "auto",
          padding: "20px 0"
        }}
      >
        {" "}
        Book Recomendation App 📖
      </h2>
      <p style={{ fontSize: "large" }}> Here are Recomended Books </p>

      <div>
        {Object.keys(bookDatabase).map((type) => (
          <button
            onClick={() => genreClickHandler(type)}
            style={{
              background: "#d1d5db",
              borderRadius: "1rem",
              padding: "1rem  2rem",
              border: "2px solid black",
              margin: "3rem 0.5rem"
            }}
          >
            {type}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDatabase[selectedType].map((book) => (
            <li
              key={book.name}
              style={{
                textAlign: "center",
                background: "#fee2e2",
                listStyle: "none",
                padding: "2rem",
                border: "solid black",
                width: "80%",
                margin: "2rem 4rem",
                borderRadius: "1rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> Raring: {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
