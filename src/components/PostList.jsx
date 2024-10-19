import Post from './Post.jsx'
import NewPost from './NewPost.jsx'
import Modal from './Modal'
import PostListCss from './PostList.module.css'
import { useState } from 'react'

function PostList(props) {
  const [posts, setPosts] = useState([])
  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts])
  }
  let modalContent
  if (props.isPosting) {
    modalContent = <Modal onClose={props.onStopPosting}>
      <NewPost onCancel={props.onStopPosting} onAddPost={addPostHandler} />
    </Modal>
  }

  return (
    <>
      {modalContent}
      {posts.length > 0 && (
        <ul className={PostListCss.posts}>
          {posts.map((post) => <Post key={post.docNo} docNo={post.docNo} fileName={post.fileName} />)}
        </ul>
      )}
      {posts.length == 0 && (
        <div style={{textAlign: 'center', color: 'black'}}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  )
}

export default PostList