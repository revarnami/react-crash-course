import ModalCss from './Modal.module.css'
function Modal(props) {
  return (
    <>
      <div className={ModalCss.backdrop} onClick={props.onClose}/>
      <dialog open className={ModalCss.modal}>
        {props.children}
      </dialog>
    </>
  )
}

export default Modal