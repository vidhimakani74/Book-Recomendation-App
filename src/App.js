import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDatabase = {
  Selfhelp: [
    {
      name: "The Power Of Positive Thinking by Norman Vincent Peale",
      rating: "4.5/5",
      description:
        "The precursor to The Secret, The Power of Positive Thinking has helped millions of men and women to achieve fulfillment in their lives. In this phenomenal bestseller, Dr. Peale demonstrates the power of faith in action. With the practical techniques outlined in this book, you can energize your life -- and give yourself the initiative needed to carry out your ambitions and hopes."
    },
    {
      name: "How to Win Friends and Influence People",
      rating: "4.5/5",
      description:
        "ow to win friends and influence people 'How to win friends and influence people is a self-help book which is the pioneer of this genre. Written by Dale Carnegie and published in 1936, it has sold over 30 million copies.  If you read the book carefully and follow majority of the tips, you can learn to be friendlier and more presentable as a person. You can become a person who emits the positivity that is inside the heart. "
    },
    {
      name: "Think and Grow Rich",
      rating: "4.18/5",
      description:
        "This is a must-read book and you should check it out ASAP if you are looking to change your current life or situation. The book comes across as a bit ‘woo woo’ at times, but I hope I’ve shown why many of the techniques work via neuroscience."
    }
  ],

  Romance: [
    {
      name: "The Fault in Our Stars",
      rating: "4.16/5",
      description:
        "The Fault In Our Stars by John Green is really positive, because I really love this book. It deals with the sensitive, emotional topic of teenage cancer, but in many ways it’s not a sad book. The way I read it, it’s a celebration of the beautiful experiences we can have in our lives, even when things are difficult."
    },
    {
      name: "The Love Hypothesis",
      rating: "4.28/5",
      description:
        "The love hypothesis is really a gem and is a must-read. The characters are really interesting and the beautiful story really brings the best out of them. This sweet and salty tale of fake dating and romance is a must-read, I really adore this book and I am sure you will too."
    },
    {
      name: "The promise",
      rating: "4.3/5",
      description:
        "The Promise’s sweeping scope and utilization of quasi-magical realism to evoke the dysfunction of life in postcolonial states renders it closer to Midnight’s Children than Coetzee’s Disgrace. There is a neat strangeness to the proceedings that suggests a fable; Amor herself gets struck by lightning as a child."
    }
  ],

  Horror: [
    {
      name: "American Psycho",
      rating: "3.82/5",
      description:
        "American Psycho has the sly appeal of pulp fiction mingled with brilliantly turning a horrific reflection of the consumerist lifestyle in on itself."
    },
    {
      name: "1984",
      rating: "4.19/5",
      description:
        "1984 is a book that you’re going to remember. From its opening lines to the various revelations about the Party and it’s means of governing its citizens a reader is met with constant twists and turns."
    },
    {
      name: "A Clockwork Orange",
      rating: "4/5",
      description:
        "A evaluation of the book “A Clockwork Orange” focussing on the abuse of power A Clockwork Orange The choice between good and evil is a decision every man should make all through his life to have the ability to information his actions and control his future."
    }
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
              <div style={{ fontSize: "large", fontWeight: "bolder" }}>
                {" "}
                {book.name}{" "}
              </div>
              <div style={{ fontSize: "medium" }}> Raring: {book.rating} </div>
              <div style={{ fontSize: "smallest" }}>
                {" "}
                Review: {book.description}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
