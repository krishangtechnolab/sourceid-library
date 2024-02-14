import axios from "../config/axiosConfig";
import { notificationProps } from "../types/notification";

export async function PostNotificationByUserid(
  apiKey: string,
  data: notificationProps
): Promise<any> {
  try {
    const response = await axios.post(`/notification/`, data, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
