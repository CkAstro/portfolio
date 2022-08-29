/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';
import type { ContactMessage } from '@/types';

const getBaseUrl = (host: string): string => {
   if (host.includes('localhost') || host.includes('192')) return `http://${host}:3004/api`;
   return '/api';
};

const baseUrl = getBaseUrl(window.location.host);

const getCSMData = (mrto: number, vwind: number, vrto: number): Promise<any> => {
   const request = axios.get(`${baseUrl}/csm/${mrto}/${vwind}/${vrto}`);
   return request.then((response) => response.data);
};

const getNeuralNet = (): Promise<any> => {
   const request = axios.get(`${baseUrl}/nn/network.json`);
   return request.then((response) => response.data);
};

const putNeuralNet = (data: any[]): Promise<any> => axios.post(`${baseUrl}/nn`, data);

const getImage = (imageName: string): Promise<any> => {
   const request = axios.get(`${baseUrl}/img/${imageName}`);
   return request.then((response) => response.config.url);
};

const sendUserMessage = (data: ContactMessage): Promise<any> => {
   if (data.message.length > 1000)
      return Promise.reject(new Error('message length above character limit'));
   const request = axios.post(`${baseUrl}/contact`, data);
   return request.then((response) => response.data);
};

export { baseUrl, getCSMData, getNeuralNet, putNeuralNet, getImage, sendUserMessage };
