import classes from './NewPost.module.css'

function NewPost() {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Document No</label>
        <textarea id="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">File Name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  )
}

export default NewPost