import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePronunciation, deletePronunciation } from "../actions/pronunciations";
import PronunciationDataService from "../services/PronunciationService";

const Pronunciation = (props) => {
  const initialPronunciationState = {
    id: null,
    title: "soumik",
    description: "s o u m i k",
    published: false
  };
  const [currentPronunciation, setCurrentPronunciation] = useState(initialPronunciationState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getpronunciation = id => {
    PronunciationDataService.get(id)
      .then(response => {
        setCurrentPronunciation(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getpronunciation(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentPronunciation({ ...currentPronunciation, [name]: value });
  };

  const updateStatus = status => {
    const data = {
      id: currentPronunciation.id,
      title: currentPronunciation.title,
      description: currentPronunciation.description
    };

    dispatch(updatePronunciation(currentPronunciation.id, data))
      .then(response => {
        console.log(response);

        setCurrentPronunciation({ ...currentPronunciation });
        setMessage("The status was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateContent = () => {
    dispatch(updatePronunciation(currentPronunciation.id, currentPronunciation))
      .then(response => {
        console.log(response);

        setMessage("The pronunciation was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removePronunciation = () => {
    dispatch(deletePronunciation(currentPronunciation.id))
      .then(() => {
        props.history.push("/pronunciations");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentPronunciation ? (
        <div className="edit-form">
          <h4>Pronunciation</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentPronunciation.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentPronunciation.description}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={removePronunciation}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateContent}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a pronunciation...</p>
        </div>
      )}
    </div>
  );
};

export default Pronunciation;
