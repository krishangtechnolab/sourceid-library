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

export async function GetOnBoardingDataById(
  apiKey: string,
  id: any
): Promise<any> {
  try {
    const response = await axios.get(`/user/${id}`, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function updateUser(
  apiKey: string,
  id: string,
  data: any
): Promise<any> {
  try {
    const response = await axios.patch(`/user/${id}`, data, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

// export async function createUser(apiKey: string, userData: User): Promise<any> {
//     try {
//         const response = await axios.post('/user/', userData, {
//             headers: {
//                 apiKey,
//             },
//         });
//         return response.data;
//     } catch (error) {
//         return Promise.reject(error);
//     }
// }

// export async function userDashboard(apiKey: string, OnboardingDataId: string): Promise<any> {
//     try {
//         const response = await axios.get(`/user/dashboard/${OnboardingDataId}`, {
//             headers: {
//                 apiKey,
//             },
//         });
//         return response.data;
//     } catch (error) {
//         return Promise.reject(error);
//     }
// }
