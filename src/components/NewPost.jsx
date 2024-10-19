import classes from './NewPost.module.css'
import { useState } from 'react'

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Document No</label>
        <textarea id="body" required rows={3} onChange={props.onDocNoChange}/>
      </p>
      <p>
        <label htmlFor="name">File Name</label>
        <input type="text" id="name" required onChange={props.onFileNameChange}/>
      </p>
    </form>
  )
}

export default NewPost