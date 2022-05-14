import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrievePronunciation,
  findPronunciationByNames,
  deleteAllPronunciations,
} from "../actions/pronunciations";
import { Link } from "react-router-dom";

const PronunciationsList = () => {
  const [currentPronunciation, setCurrentPronunciation] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchPronunciation, setSearchPronunciation] = useState("");

  const pronunciations = useSelector(state => state.pronunciations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrievePronunciation());
  }, []);

  const onChangeSearchPronunciation = e => {
    const searchPronunciation = e.target.value;
    setSearchPronunciation(searchPronunciation);
  };

  const refreshData = () => {
    setCurrentPronunciation(null);
    setCurrentIndex(-1);
  };

  const setActivePronunciation = (pronunciation, index) => {
    setCurrentPronunciation(pronunciation);
    setCurrentIndex(index);
  };

  const removeAllPronunciations = () => {
    dispatch(deleteAllPronunciations())
      .then(response => {
        console.log(response);
        refreshData();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findPronunciationByName = () => {
    refreshData();
    dispatch(findPronunciationByNames(searchPronunciation));
  };

  const playAudio=()=>{
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Name Pronunciation"
            value={searchPronunciation}
            onChange={onChangeSearchPronunciation}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findPronunciationByName}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Pronunciations List</h4>

        <ul className="list-group">
          {pronunciations &&
            pronunciations.map((pronunciation, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActivePronunciation(pronunciation, index)}
                key={index}
              >
                {pronunciation.name}
              </li>
            ))}
        </ul>

        {/* <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllPronunciations}
        >
          Remove All
        </button> */}
      </div>
      <div className="col-md-6">
        {currentPronunciation ? (
          <div>
            <h4>Pronunciation</h4>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentPronunciation.name}
            </div>
            <div>
              <label>
                <strong>Pronunciation:</strong>
              </label>{" "}
              {currentPronunciation.pronunciation}
            </div>
            <div>
              <button onClick={playAudio}>
                <span>Play Audio</span>
              </button>
              <audio className="audio-element">
                <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
              </audio>
            </div>


            {/* <Link
              to={"/pronunciations/" + currentPronunciation.id}
              className="badge badge-warning"
            >
              Edit
            </Link> */}
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Pronunciation...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PronunciationsList;
