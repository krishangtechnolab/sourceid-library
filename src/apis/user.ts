import axios from "../config/axiosConfig";
import { getAllUsersProps } from "../types";

export async function getAllUsers(
  apiKey: string,
  QueryParam: getAllUsersProps
): Promise<any> {
  try {
    const response = await axios.get(`/user/`, {
      params: QueryParam,
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function getOnBoardingDataById(
  apiKey: string,
  onboardingDataId: any
): Promise<any> {
  try {
    const response = await axios.get(`/user/${onboardingDataId}`, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function deleteUser(apiKey: string, id: string): Promise<any> {
  try {
    const response = await axios.delete(`/user/${id}`, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function updateOnboardingData(
  apiKey: string,
  onboardingDataId: string,
  data: any
): Promise<any> {
  try {
    const response = await axios.patch(`/user/${onboardingDataId}`, data, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function createUser(apiKey: string, data: any): Promise<any> {
  try {
    const response = await axios.post("/user/", data, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function userDashboard(
  apiKey: string,
  onboardingDataId: string
): Promise<any> {
  try {
    const response = await axios.get(`/user/dashboard/${onboardingDataId}`, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
