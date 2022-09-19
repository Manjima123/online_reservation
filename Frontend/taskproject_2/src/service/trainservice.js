import httpClient from "../http-common1";

const getAll = () => {
  return httpClient.get("/traindetails/g");
};
const get = (train_no) => {
  return httpClient.get(`/traindetails/ga/${train_no}`);
};
const update = (data) => {
  return httpClient.put("/traindetails/u", data);
};
const create = (data) => {
  return httpClient.post("/traindetails/{i}", data);
};
const getByTrainName = (train_name) =>{
  return httpClient.get(`/traindetails/s/${train_name}`);
 }
const remove = (train_no ) => {
  return httpClient.delete(`/traindetails/d/${train_no}`);
};
export default { getAll, get, create, update, getByTrainName,remove};
