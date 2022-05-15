import {
  CREATE_PRONUNCIATION,
  RETRIEVE_PRONUNCIATIONS,
  UPDATE_PRONUNCIATION,
  DELETE_PRONUNCIATION,
  DELETE_ALL_PRONUNCIATIONS,
} from "./types";

import PronunciationDataService from "../services/PronunciationService";
import Pronunciation from "../components/Pronunciation";

export const createPronunciation = (title, description) => async (dispatch) => {
  try {
    const res = await PronunciationDataService.create({ title, description });

    dispatch({
      type: CREATE_PRONUNCIATION,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrievePronunciation = () => async (dispatch) => {
  try {
    const res = await PronunciationDataService.getAll();

    dispatch({
      type: RETRIEVE_PRONUNCIATIONS,
      payload: res.data.pronunciations,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updatePronunciation = (id, data) => async (dispatch) => {
  try {
    const res = await PronunciationDataService.update(id, data);

    dispatch({
      type: UPDATE_PRONUNCIATION,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deletePronunciation = (id) => async (dispatch) => {
  try {
    await PronunciationDataService.remove(id);

    dispatch({
      type: DELETE_PRONUNCIATION,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllPronunciations = () => async (dispatch) => {
  try {
    const res = await PronunciationDataService.removeAll();

    dispatch({
      type: DELETE_ALL_PRONUNCIATIONS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findPronunciationByNames = (name) => async (dispatch) => {
  try {
    const res = await PronunciationDataService.findPronunciationByNames(name);

    dispatch({
      type: RETRIEVE_PRONUNCIATIONS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
