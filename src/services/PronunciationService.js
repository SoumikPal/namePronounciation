import http from "../http-common";

const getAll = () => {
  return http.get("https://namepronunciationserviceptmvn.azurewebsites.net/api/allPronunciations");
};

const get = id => {
  return http.get(`/pronunciations/${id}`);
};

const create = data => {
  return http.post("/pronunciations", data);
};

const update = (id, data) => {
  return http.put(`/pronunciations/${id}`, data);
};

const remove = id => {
  return http.delete(`/pronunciations/${id}`);
};

const removeAll = () => {
  return http.delete(`/pronunciations`);
};

const findPronunciationByNames = name => {
  return http.get(`/pronunciations?name=${name}`);
};

const PronunciationService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findPronunciationByNames
};

export default PronunciationService;
