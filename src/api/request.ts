// import store from "../redux";
import axios, { AxiosError } from "axios";
// import { logoutUser } from "../redux/auth/types";

const request = axios.create({ baseURL: process.env.REACT_APP_API_URL });

// axios.defaults.baseURL = process.env.REACT_APP_API_URL;

request.interceptors.request.use((config) => {
  /* perform other setting u want to do on the header here*/
  /* const {
    user: { token },
  } = store.getState(); */
  const requiresNoToken = config.headers["noToken"];
  const newConfig = { ...config };
  delete newConfig.headers["noToken"];

  // if (!token || requiresNoToken) return newConfig;
  newConfig.headers = {
    ...newConfig.headers,
    // Authorization: `Bearer ${token}`,
  };
  return newConfig;
});

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error: AxiosError) {
    // Do something with response error
    // console.error({ error });
    if (
      (!error.response && error.message.toLowerCase() === "network error") ||
      (error.response &&
        (error.response.status === 401 || error.response.status === 403))
    ) {
      // expired token or invalid token
      // store.dispatch({type: logoutUser.default});
    }
    return Promise.reject(error);
  }
);

export default request;
