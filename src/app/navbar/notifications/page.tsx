import { Notification } from '@/components/notification'
import './styles.css'

const Notifications: React.FC = ({

}) => {
    return (
        <div className='bg-blue-100 w-full h-full flex items-center justify-center'>
            <section className='containerNotifi'>
                <Notification/>
                <Notification/>
                <Notification/>
            </section>
        </div>
    )
}

export default Notifications