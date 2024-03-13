import axios from "../config/axiosConfig";
import { notificationProps } from "../types/notification";

export async function postNotificationByUserid(
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

export async function getAllNotification(
  apiKey: string,
  onboardingDataId: string
): Promise<any> {
  try {
    const response = await axios.get(`/notification/all/${onboardingDataId}`, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function updateNotificationByid(
  apiKey: string,
  id: string,
  data: any
): Promise<any> {
  try {
    const response = await axios.patch(`/notification/${id}`, data, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
