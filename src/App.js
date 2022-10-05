import React from "react";
import MemeForm from "./MemeForm";
import Meme from "./Meme";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const memes = useSelector(st => st.memes);
  const dispatch = useDispatch();

  function addMeme(newMeme) {
    dispatch({ type: "ADD_MEME", meme: newMeme });
  }

  function deleteMeme(id) {
    dispatch({type: "DELETE_MEME", id });
  }

  const memeCreats = memes.map(m => (
    <Meme
      key={m.id}
      topText={m.topText}
      bottomText={m.bottomText}
      url={m.url}
      deleteMeme={() => deleteMeme(m.id)}
    />
  ));

  return (
    <div className="App">
      <MemeForm addMeme={addMeme} />
      <hr />
      {memeCreats}
    </div>
  );
}

export default App;
