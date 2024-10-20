import { useLoaderData } from 'react-router-dom'
import Post from './Post.jsx'
import PostListCss from './PostList.module.css'

function PostList(props) {
  const posts = useLoaderData()

  return (
    <>
      {posts.length > 0 && (
        <ul className={PostListCss.posts}>
          {posts.map((post) => (
            <Post id={post.id} key={post.docNo} docNo={post.docNo} fileName={post.fileName} />)
          )}
        </ul>
      )}
      {posts.length == 0 && (
        <div style={{ textAlign: 'center', color: 'black' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  )
}

export default PostList