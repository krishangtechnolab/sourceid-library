import axios from "../config/axiosConfig";

export async function ForgotPassword(
  apiKey: string,
  email: string
): Promise<any> {
  try {
    const response = await axios.post(
      `/auth/forgot-password`,
      { email },
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

export async function ResetPassword(
  apiKey: string,
  resetToken: string,
  newPassword: string
): Promise<any> {
  try {
    const response = await axios.post(
      `/auth/reset-password`,
      { resetToken, newPassword },
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
