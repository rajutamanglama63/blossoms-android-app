import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
export const BASE_URL = "http://192.168.100.70:5000/";

const TIME_OUT = 30000;
export const BLOSSOM_TOKEN_NAME = "";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

export const saveToken = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log("error in saveToken: ", error);
    throw error;
  }
};

axios.interceptors.request.use(async (req) => {
  try {
    const access_token = await AsyncStorage.getItem(BLOSSOM_TOKEN_NAME);
    console.log("access_token: ", access_token);
    req.headers.Authorization = `Bearer ${access_token}`;
    return req;
  } catch (error) {
    return req;
  }
});

export const fetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);

export default axiosInstance;
