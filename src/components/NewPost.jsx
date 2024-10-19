import classes from './NewPost.module.css'
import { useState } from 'react'

function NewPost(props) {
  const [enteredDocNo, setEnteredDocNo] = useState('')
  const [enteredFileName, setEnteredFileName] = useState('')

  function onDocNoChange(event) {
    setEnteredDocNo(event.target.value)
  }

  function onFileNameChange(event) {
    setEnteredFileName(event.target.value)
  }

  function submitHandler(event) {
    event.preventDefault()
    const postData = {
      docNo: enteredDocNo,
      fileName: enteredFileName
    }
    props.onAddPost(postData)
    props.onCancel()
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Document No</label>
        <input type="text" id="name" required onChange={onDocNoChange}/>
      </p>
      <p>
        <label htmlFor="name">File Name</label>
        <textarea id="body" required rows={3} onChange={onFileNameChange}/>
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  )
}

export default NewPost