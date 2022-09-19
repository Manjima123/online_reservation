import httpClient from "../http-common2";

let jwt = localStorage.getItem("jwt");
const create = (data) => {
  return httpClient.post("/security/createUser", data);
};

const getAll = () => {
  return httpClient.get("/security/user/g", {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};
const getUserId = (id) => {
  return (httpClient.get(`/security/user/ga/${id}`, {
  headers: {
      Authorization: `Bearer ${jwt}`,
    },
  })
  );
};

const getByEmailId = (emailId) => {
  return httpClient.get(`/user/getbyEmailid/${emailId}`);
};

const getByUserNamee = (username) => {
  return httpClient.get(`security/user/getbyusername/${username}`);
};
const createBooking = (data) => {
  return httpClient.post("/security/user/b/i", data);
};
const createTrainDetails = (data) => {
  return httpClient.post("/security/admin/p/t", data, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const createTicketDetails = (data) => {
  return httpClient.post("/security/admin/p/ticket", data);
};
const update = (data) => {
  return (httpClient.put("/security/user/updateUserDetails", data, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  })
  );
};

const getBookingByemail = (emailId) => {
  return httpClient.get(`security/user/getAllBookingbyemailId/${emailId}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const authenticate = (data) => {
  return httpClient.post("/security/authenticate", data);
};

export default {
  create,
  getAll,
  getUserId,
  getByEmailId,
  getByUserNamee,
  createBooking,
  createTrainDetails,
  createTicketDetails,
  update,
  getBookingByemail,
  authenticate,
};
