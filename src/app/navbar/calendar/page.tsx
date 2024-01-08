'use client'

import * as React from 'react'

import './styles.css'

import { Calendar } from "@/components/ui/calendar";

import FullCalendar from '@fullcalendar/react';
import daygrid from '@fullcalendar/daygrid'
import timegrid from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import timegridPlugin from '@fullcalendar/timegrid'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useState } from 'react';
import Modal from '@/components/modal';
import { X } from 'lucide-react';
   
export default function Calendario() {

    const  [count, setCount] = useState(0)

    const handleMore = () => {
        setCount(count + 1)
    }

    const handleMinus = () => {
        setCount(count - 1)
    }

    const handleClick = () => {
      alert('Foi')
    }
    
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    const dataModal = [{
        title:'Remoção de fígado',
        date:'2024-01-05',
        url:'https://fullcalendar.io/docs/eventClick',
        plugins:[interactionPlugin],
        editable:true,
        events: [{
          start:'2024-01-06',
          end:'2024-01-06',
          display:'backgronud',
          color:'#000'
        }]
    }]

    const [openModal, setOpenModal] = useState(false)

    function handleClickModal(){
      setOpenModal(!openModal)
    }

    return (
      <div className="flex flex-row w-full h-full bg-blue-100 p-0">
          <Modal className='' isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
              <div className='containerModal'>
                <div className='titleModal'>
                    <h1>Agendamento</h1>
                    <X className='closeModal'/>
                </div>
              </div>
          </Modal>
          <div className='flex flex-row w-full h-full p-8'>
            <div className="mt-28">
                <div className=''>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-2xl border w-full bg-white w-full shadow-xl z-100"
                    />
                </div>
                <div className="pt-4">
                    <div className="flex gap-4 mb-2">
                        <div className="w-6 h-6 rounded-2xl bg-yellow-500"></div>
                        <p>Consulta</p>
                    </div>
                    <div className="w-full h-0.5 bg-gray-300 mb-2"></div>
                    <div className="flex gap-4 mb-2">
                        <div className="w-6 h-6 rounded-2xl bg-blue-500"></div>
                        <p>Procedimento</p>
                    </div>
                    <div className="w-full h-0.5 bg-gray-300 mb-2"></div>
                    <div className="flex gap-4">
                        <div className="w-6 h-6 rounded-2xl bg-green-500 mb-2"></div>
                        <p>Retorno</p>
                    </div>
                    <div className="w-full h-0.5 bg-gray-300 mb-2"></div>
                    <div className="flex gap-4">
                        <div className="w-6 h-6 rounded-2xl bg-red-500 mb-2"></div>
                        <p>Cancelado</p>
                    </div>
                    <div className="w-full h-0.5 bg-gray-300"></div>
                </div>
            </div>
            <div className='w-full mt-28 bg-white p-6 rounded ml-5'>
                   <FullCalendar
                        plugins={[ daygrid, interactionPlugin, timegrid, timegridPlugin ]}
                        initialView="dayGridMonth"
                        dateClick={handleClickModal}
                        themeSystem='bootstrap5'
                        headerToolbar={
                        {
                            start: 'timeGridDay,timeGridWeek',
                            center: 'title',
                            end: 'prev,next'
                        }
                        }
                        events={dataModal}
                        eventClick={(arg) => console.log(arg)}
                        height='100%'
              />
            </div>
            
          </div>
        </div>
  );
}