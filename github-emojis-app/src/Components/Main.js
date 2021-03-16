import React, { useState, useEffect } from 'react';
import EmojiItem from "./EmojiItem";

const apiURL = "https://api.github.com/emojis";

const Main = () => {
  const [emojis, setEmojis] = useState([]);
  const fetchEmojis = async () => {
    const response = await fetch(apiURL);
    const emojis = await response.json();
    console.log(emojis);
    setEmojis((prevState) => emojis);
    setPageTitle("GitHub Emojis");
  }
  const [pageTitle, setPageTitle] = useState("Loading...");
  const changePageTitle = (newTitle) => {
    setPageTitle(newTitle);
  }
  useEffect(() => {
    fetchEmojis();
  }, []);
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-8xl font-bold title-font mb-4 text-white">
            {pageTitle}
          </h1>
        </div>
        <div className="grid grid-flow-row grid-cols-6 gap-2 justify-start justify-items-stretch">
          {Object.entries(emojis).map((emoji) => {
            const [key, value] = emoji;
            return <EmojiItem key={key} emojiTitle={key} emojiImgSrc={value} changePageTitle={changePageTitle} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Main
