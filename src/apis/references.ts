import axios from "../config/axiosConfig";

export async function getReference(apiKey: string, id: string): Promise<any> {
  try {
    const response = await axios.get(`/reference/${id}`, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function updateReference(
  apiKey: string,
  id: string,
  data: any
): Promise<any> {
  try {
    const response = await axios.patch(`/reference/${id}`, data, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function deleteReference(
  apiKey: string,
  id: string
): Promise<any> {
  try {
    const response = await axios.delete(`/reference/${id}`, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function createReference(apiKey: string, data: any): Promise<any> {
  try {
    const response = await axios.post(`/reference/`, data, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function getAllReference(
  apiKey: string,
  onboardingDataId: string
): Promise<any> {
  try {
    const response = await axios.get(`/reference/all/${onboardingDataId}`, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
