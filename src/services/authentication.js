import axios from "#/services/axios";
import { mockAuth } from "./mock";

if (process.env.REACT_APP_ENV === "development") {
  mockAuth();
}

export const login = async (form = {}) => {
  try {
    const { data = {} } = await axios.post("/auth/login", form);

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const register = (form = {}) => {
  try {
    const { data = {} } = axios.post("/auth/register", form);

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getErrorMessage = (error = {}) => {
  const { message } = error;
  console.dir(error);

  switch (message) {
    case "Error: Request failed with status code 401": {
      return "Your email or password was incorrect";
    }

    case 500: {
      return "Server is down :(";
    }

    default: {
      return "Something went wrong";
    }
  }
};
