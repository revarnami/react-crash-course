import Post from './Post.jsx'
import NewPost from './NewPost.jsx'
import './PostList.module.css'


function PostList() {
  return (
    <>
      <NewPost />
      <ul className='posts'>
        <Post DocNo='01' FileName='Document 1'></Post>
        <Post DocNo='02' FileName='Document 2'></Post>
      </ul>
    </>
  )
}

export default PostList