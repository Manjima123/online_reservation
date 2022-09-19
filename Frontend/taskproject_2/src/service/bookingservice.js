import httpClient from "../http-common2";
import httpClient1 from "../http-common-3";
let jwt = localStorage.getItem("jwt");

const create = (data) => {
  return httpClient.post("/security/user/b/i", data, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const getAll = () => {
  return httpClient.get("/security/admin/t", {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};
const getbookingEmail = (emailId) => {
  return httpClient1.get(`/bookingdetails/getAllBooking/${emailId}`);
};
const remove = (id) => {
  return httpClient.delete(`/security/user/delete/booking/${id}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};
const update = (data) => {
  return httpClient.put("/security/user/updateBooking", data, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const get = (id) => {
  return httpClient1.get(`/bookingdetails/ga/${id}`);
};
const createTicket = (data) => {
  return httpClient.post("security/user/p/ticket", data);
};
const fullticket = (emailId) => {
  return httpClient1.get(`security/user/ga/viewticket/${emailId}`);
};

export default {
  create,
  getAll,
  getbookingEmail,
  remove,
  update,
  get,
  createTicket,
  fullticket,
};
