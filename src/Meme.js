import React from "react";
import PropTypes from "prop-types";

function Meme({id, topText, url, bottomText, deleteMeme}) {
  function handleDelButton(){
    deleteMeme(id)
  }
  return (
    <div>
      <div>
        <span>{topText}</span>
        <img src={url} alt="this is a meme" />
        <span>{bottomText}</span>
        <button id="delete_meme" onClick={handleDelButton}>TRASH IT!</button>
      </div>
    </div>
  )
}
Meme.propTypes = {
  topText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired
};


export default Meme;
