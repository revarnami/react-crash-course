import PostCss from './Post.module.css'

function Post(props) {
  return (
    <div className={PostCss.div}>
      <p>#{props.DocNo}</p>
      <p>{props.FileName}</p>
    </div>
  )
}

export default Post