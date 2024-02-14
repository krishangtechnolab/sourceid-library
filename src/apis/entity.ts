import axios from "../config/axiosConfig";

export async function createEntity(apiKey: string, data: any): Promise<any> {
  try {
    const response = await axios.post(`/entity/create`, data, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function onbaordAdminuser(
  apiKey: string,
  data: any
): Promise<any> {
  try {
    const response = await axios.post(`/entity/onboard-admin`, data, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
