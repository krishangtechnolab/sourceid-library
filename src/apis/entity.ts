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

export async function getAllEntitiesByUserId(
  apiKey: string,
  id: string
): Promise<any> {
  try {
    const response = await axios.get(`/entity/user-entity/${id}`, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function associateUserWithEntity(
  apiKey: string,
  id: string,
  data: string
): Promise<any> {
  try {
    const response = await axios.post(
      `/entity/userentity-connect/${id}`,
      data,
      {
        headers: {
          apiKey,
        },
      }
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function getEntityByCode(
  apiKey: string,
  entityId: string
): Promise<any> {
  try {
    const response = await axios.get(`/entity/get-entity/${entityId}`, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function getAll(apiKey: string): Promise<any> {
  try {
    const response = await axios.get(`/entity/all/`, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
