"use client"

import { Input } from '@/components/ui/input'
import './styles.css'
import { Checkbox } from '@/components/ui/checkbox'
import { GitCommitVertical, GlassWater, LucideGalleryThumbnails, LucideGlasses, ThumbsUp } from 'lucide-react'
import { useState } from 'react'

const News: React.FC = ({

}) => {

    const[key, setKey] = useState()

    return (
        <div className='bg-blue-100 w-full h-full'>
            <div className='container'>
                <div className='main'>
                    <div className='sessionInput'>
                        <div className='icon'>
                            <p className='textIcon'>JB</p>
                        </div>
                        <div className='input'>
                            <Input placeholder='Criar uma publicação'/>
                        </div>
                        <div className='inputSearch'>
                            <Input placeholder='Buscar na página'/>
                            <button type='submit' className='submit'>
                                <LucideGlasses/>
                            </button>
                        </div>
                    </div>
                    <div className='boxCheckbox'>
                        <p>Mostrar publicações:</p>
                        <div className='checkBox'>
                            <Checkbox key={key}/>
                            <label htmlFor="forms" className='label'>Público</label>
                        </div>
                        <div className='checkBox'>
                            <Checkbox key={key}/>
                            <label htmlFor="forms" className='label'>Amigos</label>
                        </div>
                    </div>
                    <div className='comments'>
                        <div className='profile'>
                            <div className='icon'>
                                <img className='iconPhoto' src="https://www.irelandchauffeurtravel.com/wp-content/uploads/2020/11/Black-Woman-with-Red-hair-560x545.jpg" alt="" />
                            </div>
                            <div>
                                <p className='namePerson'>Pamela Costa</p>
                                <p className='hourPerson'>20 h</p>
                            </div>
                            <div className='points'>
                                <p className='threePoints'>...</p>
                            </div>
                        </div>
                        <p className='commentProfile'>Finalizando mais um dia de vários atendimentos 😄</p>
                        <div className='interactions'>
                            <div className='action'>
                                <ThumbsUp/>
                                <p>Curtir</p>
                            </div>
                            <div className='action'>
                                <LucideGalleryThumbnails/>
                                <p>Comentar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News