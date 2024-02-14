import axios from "../config/axiosConfig";
import { RiskRangeProps, RiskScoreProps, AdminProps } from "../types/admin";

export async function getAdminUser(apiKey: string, id: string): Promise<any> {
  try {
    const response = await axios.get(`/admin/${id}`, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function UpdateAdminUser(
  apiKey: string,
  id: string,
  data: AdminProps
): Promise<any> {
  try {
    const response = await axios.patch(`/admin/${id}`, data, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function getRiskScore(
  apiKey: string,
  entityId: string
): Promise<any> {
  try {
    const response = await axios.get(`/admin/risk-score/${entityId}`, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function updateRiskScore(
  apiKey: string,
  id: string,
  data: RiskScoreProps
): Promise<any> {
  try {
    const response = await axios.patch(`/admin/risk-score/${id}`, data, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function getRiskRange(
  apiKey: string,
  entityId: string
): Promise<any> {
  try {
    const response = await axios.get(`/admin/risk-range/${entityId}`, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function updateRiskRange(
  apiKey: string,
  id: string,
  data: RiskRangeProps
): Promise<any> {
  try {
    const response = await axios.patch(`/admin/risk-range/${id}`, data, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function placeKeyAPI(apiKey: string, data: any): Promise<any> {
  try {
    const response = await axios.post(`/admin/placekey`, data, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function PlaceKeyMatchAPI(
  apiKey: string,
  data: any
): Promise<any> {
  try {
    const response = await axios.post(`/admin/placekey-match`, data, {
      headers: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
