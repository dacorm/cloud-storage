import nookies from "nookies";
import axios from "../core/axios";
import { Api } from "../api";

export const checkAuth = async (ctx) => {
  const { _token } = nookies.get(ctx);

  axios.defaults.headers.Authorization = "Bearer " + _token;

  try {
    await Api.auth.getMe();

    return { props: {} };
  } catch (err) {
    console.log(err);
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
};
