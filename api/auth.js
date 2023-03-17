import axios from "../core/axios";
import { destroyCookie } from "nookies";

export const login = async (data) => {
  return (await axios.post("/auth/login", data)).data;
};

export const register = async (data) => {
  return (await axios.post("/auth/register", data)).data;
};

export const getMe = async () => {
  return (await axios.get("/users/me")).data;
};

export const logout = () => {
  destroyCookie(null, "_token");
};
