import { IndexProps } from './models'

const Modal: React.FC<IndexProps> = ({
  isOpen,
  setModalOpen,
  className,
  children
}) => {

  if (isOpen == true) {

    return (
                <div className={`${'OverLay'} ${className}`}>
                    {children}
                </div>
    )
    }
  }

export default Modal
