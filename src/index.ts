// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// async function getAllUsers(apiKey: string): Promise<any> {
//   try {
//     const requestConfig: AxiosRequestConfig = {
//       method: 'GET',
//       url: 'http://localhost:3001/user/',
//       headers: {
//         apiKey,
//       },
//     };

//     const { data }: AxiosResponse<any> = await axios(requestConfig);
//     return data;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// }

// // Export the function
// export const userApi = {
//   getAllUsers,
// };

// Export everything from apis/index.ts
export * as sourceIdApi from "./apis";
