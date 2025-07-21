import axios from "axios";

const base =
  process.env.NEXT_PUBLIC_ENVIROMENT === "development"
    ? process.env.NEXT_PUBLIC_LOCAL_HOST
    : process.env.NEXT_PUBLIC_WEB_HOST;

export const user = axios.create({
  baseURL: `${base}/users`,
});

export const auth = axios.create({
  baseURL: `${base}/auth`,
});

export const investment = axios.create({
  baseURL: `${base}/investments`,
});

export const foundation = axios.create({
  baseURL: `${base}/foundations`,
});

export const loan = axios.create({
  baseURL: `${base}/loans`,
});

export const subscriber = axios.create({
  baseURL: `${base}/subscribers`,
});
