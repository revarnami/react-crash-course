import { useNavigate } from 'react-router-dom'
import ModalCss from './Modal.module.css'

function Modal(props) {
  const navigate = useNavigate()

  function closeHandler() {
    navigate('..')
  }

  return (
    <>
      <div className={ModalCss.backdrop} onClick={closeHandler}/>
      <dialog open className={ModalCss.modal}>
        {props.children}
      </dialog>
    </>
  )
}

export default Modal