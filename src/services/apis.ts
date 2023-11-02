import axiosInstance, {
  BLOSSOM_TOKEN_NAME,
  fetcher,
  saveToken,
} from "./config";
import AsyncStorage from "@react-native-async-storage/async-storage";

type LoginUserTypes = Omit<IUser, "name">;
type PostCategoryTypes = Omit<ICategory, "color" | "icon" | "userId" | "id">;

export const loginUser = async ({ email, password }: LoginUserTypes) => {
  // console.log("user input from apis: ", email, password);
  try {
    const response = await axiosInstance.post("auth/login", {
      email,
      password,
    });
    // console.log("res: ", response.data);
    const _token = response.data.token;
    console.log("access_token for header: ", _token);
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${_token}`;
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

export const getUserSpecificCategories = async () => {
  const access_token = await AsyncStorage.getItem(BLOSSOM_TOKEN_NAME);
  console.log("acctkn: ", access_token);
  const config = {
    headers: { Authorization: `bearer ${access_token}` },
  };
  // const allCategories = await fetcher("catagories/mine");
  const allCategories = await axiosInstance.get("catagories/mine", config);
  return allCategories.data;
};

export const postCategory = async (category: PostCategoryTypes) => {
  return await axiosInstance.post("catagories", { category });
};
