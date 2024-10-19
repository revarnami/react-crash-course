import Post from './Post.jsx'
import NewPost from './NewPost.jsx'
import Modal from './Modal'
import PostListCss from './PostList.module.css'
import { useState } from 'react'

function PostList(props) {
  const [enteredDocNo, setEnteredDocNo] = useState('')
  const [enteredFileName, setEnteredFileName] = useState('')

  function onDocNoChange(event) {
    setEnteredDocNo(event.target.value)
  }

  function onFileNameChange(event) {
    setEnteredFileName(event.target.value)
  }

  let modalContent
  if (props.isPosting) {
    modalContent = <Modal onClose={props.onStopPosting}>
      <NewPost onDocNoChange={onDocNoChange} onFileNameChange={onFileNameChange} onCancel={props.onStopPosting}/>
    </Modal>
  }

  return (
    <>
      {modalContent}
      <ul className={PostListCss.posts}>
        <Post docNo='01' fileName='Document 1'></Post>
        <Post docNo='02' fileName='Document 2'></Post>
      </ul>
    </>
  )
}

export default PostList