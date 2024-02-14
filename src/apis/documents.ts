import axios from "../config/axiosConfig";

export async function getAllDocuments(
  apiKey: string,
  QueryParam: any
): Promise<any> {
  try {
    const response = await axios.get(`/image/`, {
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

export async function getDocumentByUser(apiKey: string, id: any): Promise<any> {
  try {
    const response = await axios.get(`/image/all/${id}`, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function getDocumentByDocId(
  apiKey: string,
  id: any
): Promise<any> {
  try {
    const response = await axios.get(`/image/${id}`, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
export async function updateDocumentByDocId(
  apiKey: string,
  id: string,
  data: any
): Promise<any> {
  try {
    const response = await axios.patch(`/image/${id}`, data, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
