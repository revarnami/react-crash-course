import Post from './Post.jsx'
import NewPost from './NewPost.jsx'
import PostListCss from './PostList.module.css'


function PostList() {
  return (
    <>
      <NewPost />
      <ul className={PostListCss.posts}>
        <Post docno='01' body='Document 1'></Post>
        <Post docno='02' body='Document 2'></Post>
      </ul>
    </>
  )
}

export default PostList