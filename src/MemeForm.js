import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const DEFAULT_FORM = {
  url: "",
  topText: "",
  bottomText: ""
};

function MemeForm({ addMeme }) {
  const [form, setForm] = useState(DEFAULT_FORM);

  function handleSubmit(e) {
    e.preventDefault();
    addMeme({ ...form, id: uuidv4() });
    setForm(DEFAULT_FORM);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  return (
    <div>
      <h2>Create your own meme</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Image URL</label>
        <input
          type="text"
          name="url"
          id="form_url"
          onChange={handleChange}
          value={form.url}
        />
        <label htmlFor="topText">Top Text</label>
        <input
          type="text"
          name="topText"
          id="form_topText"
          onChange={handleChange}
          value={form.topText}
        />
        <label htmlFor="bottomText">Bottom Text</label>
        <input
          type="text"
          name="bottomText"
          id="form_bottomText"
          onChange={handleChange}
          value={form.bottomText}
        />
        <button type="submit" id="submitButton">Submit</button>
      </form>
    </div>
  );
}

export default MemeForm;
