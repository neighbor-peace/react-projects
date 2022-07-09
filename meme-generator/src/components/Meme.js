import { useEffect } from "react";
import { useState } from "react";
import React from "react"

export default function Meme() {

    
  const [meme, setMeme] = useState(
    {
        topText: '',
        bottomText: '',
        randomImage: "http://i.imgflip.com/1bij.jpg",
    }
  );

  const [allMemes, setAllMemes] = useState();

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data));
  }, []);

  function getMemeImage() {
    const memeArr = allMemes.data.memes;
    const memeURL = memeArr[Math.floor(Math.random() * memeArr.length)].url;
    setMeme(prevState => ({
        ...prevState,
        randomImage: memeURL,
    }));
    }

    function handleChange(event) {
        const {value, name} = event.target;
        setMeme(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }   

  return (
    <main>
        <div className="form">
            <input 
                type="text"
                placeholder="Top text"
                className="form--input"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="Bottom text"
                name="bottomText"
                className="form--input"
                value={meme.bottomText}
                onChange={handleChange}
            />
            <button 
                className="form--button"
                onClick={getMemeImage}
            >
                Get a new meme image 🖼
            </button>
        </div>
        <div className="meme">
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </main>
)
}