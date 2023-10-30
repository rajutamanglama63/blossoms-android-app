import axiosInstance, {
  BLOSSOM_TOKEN_NAME,
  fetcher,
  saveToken,
} from "./config";

type LoginUserTypes = Omit<IUser, "name">;

export const loginUser = async ({ email, password }: LoginUserTypes) => {
  // console.log("user input from apis: ", email, password);
  try {
    const response = await axiosInstance.post("auth/login", {
      email,
      password,
    });
    // console.log("res: ", response.data);
    const _token = response.data.token;
    axiosInstance.defaults.headers.common["Authorization"] = _token;
    saveToken(BLOSSOM_TOKEN_NAME, _token);
    return response;
  } catch (error) {
    console.log("error in loginUser", error);
    throw error;
  }
};

export const getUsers = async () => {
  const allUsers = await fetcher("user");
  console.log("allUsers: ", allUsers);
};
