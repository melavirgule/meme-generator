import { useState } from "react";
import memeData from "../../memeData";

export default function () {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bik.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memeData);

  function getMemeImage() {
    // console.log('clicked')
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    console.log(url);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          name="form--input"
          className="form--input"
          placeholder="Top Text"
        />
        <input
          type="text"
          name="form--input"
          className="form--input"
          placeholder="Bottom Text"
        />
        <button onClick={getMemeImage} className="form--btn">
          Get a new meme image 🖼
        </button>
      </div>

      <img src={meme.randomImage} />
    </main>
  );
}
