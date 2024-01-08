import { Import, LucideUserCircle2, Pencil, PencilIcon, PersonStandingIcon, Share2, Trash, Trash2 } from 'lucide-react'
import './styles.css'
import { Input } from '@/components/ui/input'

const Perfil: React.FC = ({

}) => {
    return (
        <section className='bg-blue-100 w-full h-full flex justify-center flex-col items-center gap-10'>
            <div className="topContainer">
                <div className='infosPerson'>
                    <div className='teste'>
                        <LucideUserCircle2 width={70} height={70}/>
                    </div>
                    <div className='infos'>
                        <p>João barreto</p>
                        <div className='friends'>
                            <p>2 amigos</p>
                            <p className='fontBlue'>Adicionar Foto</p>
                            <Import className='fontBlue'/>
                        </div>
                    </div>
                </div>
                <div className='myData'>
                    <h2 className=''>Meus dados</h2>
                </div>
                <div className='topInput'>
                    <div className='boxInput'>
                        <p>Nome</p>
                        <Input width={40} height={30} placeholder='Digitar...'/>
                    </div>
                    <div className='boxInput'>
                        <p>Sobrenome</p>
                        <Input width={10} height={30} placeholder='Digitar...'/>
                    </div>
                    <div className='boxInput'>
                        <p>E-mail</p>
                        <Input width={10} height={30} placeholder='Digitar...'/>
                    </div>
                </div>
                <div className='topInput'>
                    <div className='boxInput'>
                        <p>Gênero</p>
                        <Input width={40} height={30} placeholder='Digitar...'/>
                    </div>
                    <div className='boxInput'>
                        <p>Data de nascimento</p>
                        <Input type='date' width={10} height={30} placeholder='Digitar...'/>
                    </div>
                    <div className='boxInput'>
                        <p>Especialidade</p>
                        <Input width={10} height={30} placeholder='Digitar...'/>
                    </div>
                </div>
                <div className='topInput bottom'>
                    <div className='boxInput'>
                        <p>Cargo</p>
                        <Input width={40} height={30} placeholder='Digitar...'/>
                    </div>
                    <div className='boxInput'>
                        <p>Local de trabalho</p>
                        <Input width={10} height={30} placeholder='Digitar...'/>
                    </div>
                </div>
                <div className='button'>
                    <button className='save backBlue'>Salvar alterações</button>
                </div>
            </div>
            <div className='bottomContainer'>
                <h2>Minhas postagens</h2>
                <div className='mainBottom'>
                    <div className='firstInfo'>
                        <img className='photo' src="https://www.shutterstock.com/image-photo/professional-doctor-medical-mask-putting-600nw-1907753290.jpg" alt="" />
                        <div className='commentsPerfil'>
                            <p>8 curtidas</p>
                            <p>0 comentário</p>
                        </div>
                    </div>
                    <div className='comment'>
                        <p>Hoje descobri uma doença rara que um paciente me mostrou</p>
                        <p className='publication'>Publicado em 20 h</p>
                    </div>
                <div className='actionsBottom'>
                    <div className='remove'>
                        <Trash2 className='fontRed'/>
                        <p className='fontRed'>Excluir</p>
                    </div>
                    <div className='edit'>
                        <PencilIcon className='fontBlue'/>
                        <p className='fontBlue'>Editar</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Perfil