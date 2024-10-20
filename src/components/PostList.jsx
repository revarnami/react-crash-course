import Post from './Post.jsx'
import NewPost from './NewPost.jsx'
import Modal from './Modal'
import PostListCss from './PostList.module.css'
import { useEffect, useState } from 'react'

function PostList(props) {
  const [posts, setPosts] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true)
      const response = await fetch('http://localhost:8080/posts')
      const resData = await response.json()
      setPosts(resData.posts)
      setIsFetching(false)
    }
    fetchPosts()
  }, [])
  
  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
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
      {!isFetching && posts.length > 0 && (
        <ul className={PostListCss.posts}>
          {posts.map((post) => <Post key={post.docNo} docNo={post.docNo} fileName={post.fileName} />)}
        </ul>
      )}
      {!isFetching && posts.length == 0 && (
        <div style={{textAlign: 'center', color: 'black'}}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{textAlign: 'center'}}>
          <p>Loading data...</p>
        </div>
      )}
    </>
  )
}

export default PostList