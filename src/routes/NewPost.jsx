import { Form, Link, redirect } from 'react-router-dom'
import Modal from '../components/Modal'
import classes from './NewPost.module.css'

function NewPost(props) {
  return (
    <Modal>
      <Form method='post' className={classes.form} >
        <p>
          <label htmlFor="body">Document No</label>
          <input type="text" id="name" name='docNo' required />
        </p>
        <p>
          <label htmlFor="name">File Name</label>
          <textarea id="body" name='fileName' required rows={3} />
        </p>
        <p className={classes.actions}>
          <Link to='..' type='button' >Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  )
}

export default NewPost

export async function action({request}) {
  const formData = await request.formData()
  const postData = Object.fromEntries(formData)
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return redirect('/')
}