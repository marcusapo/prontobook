import axios, { AxiosResponse } from 'axios';
import {api}  from './api'


type SignInRequest = {
     usuario: string;
     senha: string;
}



    export async function signInRequest(
      data: SignInRequest
    ): Promise<AxiosResponse> {
      try {
        const response = await api.post("/auth/login", data);
        return response;
      } catch (error) {
        throw error;
      }
    }
