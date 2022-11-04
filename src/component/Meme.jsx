import { useState, useEffect } from "react";
// import memeData from "../../memeData"; => Importing data from API now

export default function () {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/2hgfw.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  function getMemeImage() {
    // console.log('clicked')
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;

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
