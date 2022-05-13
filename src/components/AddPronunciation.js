import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPronunciation } from "../actions/pronunciations";

const AddPronunciation = () => {
  const initialPronunciationState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [pronunciation, setpronunciation] = useState(initialPronunciationState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setpronunciation({ ...pronunciation, [name]: value });
  };

  const savepronunciation = () => {
    const { title, description } = pronunciation;

    dispatch(createPronunciation(title, description))
      .then(data => {
        setpronunciation({
          id: data.id,
          title: data.title,
          description: data.description,
          published: data.published
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newpronunciation = () => {
    setpronunciation(initialPronunciationState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newpronunciation}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={pronunciation.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={pronunciation.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={savepronunciation} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPronunciation;
