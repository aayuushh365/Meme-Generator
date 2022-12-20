import React from 'react'
import memeData from '../memeData';

const Meme = () => {

  // const [memeImg , setMemeImg] = React.useState("")

const [meme , setMeme] = React.useState({
    topText : "",
    bottomText : "",
    randomImg : "http://i.imgflip.com/1bij.jpg",
})

const [allMemeImgs, setAllMemeImgs] = React.useState(memeData)

  const getMemeImg = () => {
    const memesarray = allMemeImgs.data.memes;
    const randomnumber = Math.floor(Math.random() * memesarray.length);
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImg: memesarray[randomnumber].url
      };
    });
  }
  return (
    <main>
      <div className="form">
        <input
          className="form1"
          type="text"
          placeholder="Shut Up"
          style={{ width: "50%", padding: "10px", borderRadius: "5px" }}
        />
        <input
          className="form2"
          type="text"
          placeholder="And take my Money"
          style={{ width: "50%", padding: "10px", borderRadius: "5px" }}
        />
        <button className="form-btn" onClick={getMemeImg}>
          Get a new meme image
        </button>
      </div>
      <div className="img-container">
        <img className="memeimg" src={meme.randomImg} alt="" />
      </div>
    </main>
  );
}

export default Meme;
