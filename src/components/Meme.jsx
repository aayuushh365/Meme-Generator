import React from 'react'
import memeData from '../memeData';

const Meme = () => {

  const [memeImg , setMemeImg] = React.useState("")

  const getMemeImg = () => {
    const memesarray = memeData.data.memes;
    const randomnumber = Math.floor(Math.random() * memesarray.length);
    setMemeImg(memesarray[randomnumber].url);
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
        <img className='memeimg' src={memeImg} alt="" />
      </div>
    </main>
  );
}

export default Meme;
