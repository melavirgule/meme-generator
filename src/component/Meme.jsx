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

  function handleChange(event) {
    //console.log(event.target.value)
    const {value, name} = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  console.log(meme);
  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top Text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        
        <input
          type="text"
          placeholder="Bottom Text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button onClick={getMemeImage} className="form--btn">
          Get a new meme image 🖼
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
