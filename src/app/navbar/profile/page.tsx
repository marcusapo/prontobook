"use client";

import * as React from 'react'

import { useRouter } from 'next/navigation';

import CustomAvatar from "../../../components/ui/avatar";

import { Calendar } from "@/components/ui/calendar";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Profile() {

  const router = useRouter()
  
  const handleClick = () => {
    router.push('/calendar')
  }

  return (
    <div className="flex flex-col  w-full h-full bg-blue-100">
      <div className="flex items-center justify-center ml-auto mr-auto pt-5 h-3/5  w-4/5">
        <div className="w-full h-full rounded-lg shadow-md bg-white">
          <div className="flex p-10 w-5/12">
            <div className="grid grid-cols-2">
              <div className="p-4 pl-14">
                <CustomAvatar
                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                  fallbackText="caleb"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/5 flex items-center justify-center ml-auto mr-auto pt-5 h-3/5">
        <div className="w-full h-full flex flex-col justify-center gap-5 h-50 rounded-lg shadow-md bg-white">
        {/* <Card className="flex flex-col items-center bg-sky-700 w-5/12 h-5/5 border-double border-8 border-black">
          <CardHeader>
            <CardTitle className="text-white">Informações gerais</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-1 text-white">
            <p>Tipo de exame:</p>
            <p>Check-up</p>
          </CardContent>
          <CardContent className="flex gap-1 text-white">
            <p>Hospital:</p>
            <p>Santa Marta</p>
          </CardContent>
          <CardContent className="flex gap-1 text-white">
            <p>Posto de saúde:</p>
            <p>Rosana</p>
          </CardContent>
          <CardContent className="flex gap-1 text-white">
            <p>Local:</p>
            <p>Praça do relógio</p>
          </CardContent>
          <CardContent className="flex gap-1 text-white">
            <p>Horário:</p>
            <p>10:30</p>
          </CardContent>
          <CardContent className="flex gap-1 text-white">
            <p>CEP:</p>
            <p>000.000-00</p>
          </CardContent>
          <CardFooter className="w-4/6">
            <img src="https://pplware.sapo.pt/wp-content/uploads/2021/07/google_maps_viajar_tempo_2.jpg" alt=""/>
          </CardFooter>
          <div className="flex mb-6 ml-14 gap-8">
            <button className="bg-green-500 rounded text-md w-2/5 cursor-pointer hover:bg-green-400 transition-all">Confirmar Agendamento</button>
            <button className="bg-red-500 rounded text-md w-2/5 cursor-pointer hover:bg-red-400 transition-all">Cancelar Agendamento</button>
          </div>
        </Card> */}
        </div>
      </div>
    </div>
  );
}


   

