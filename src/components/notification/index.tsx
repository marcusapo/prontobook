import { IndexProps } from './models'
import './styles.css'

export const Notification: React.FC<IndexProps> = ({
    name = 'Digite o seu nome',
    comment = 'Faça um comentário',
    photo
}) => {
    return (
        <section className='notifications'>
            <div className='boxNotifi'>
                <div className="abrev">
                    <p>RS</p>
                </div>
                <div className='textNotifi'>
                    <div className="nameNotifi">
                        <p>{name}</p>
                        <p>20 h</p>
                    </div>
                    <div className='mainNot'>
                        <p>{comment}</p>
                        <div>
                            <p className='fontBlue'>Visualizar</p>
                            <p className='fontRed'>Excluir</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lineNot'>

            </div>
        </section>
    )
}