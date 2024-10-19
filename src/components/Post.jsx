import postcss from './Post.module.css'

function Post(props) {
  return (
    <div className={postcss.post}>
      <p>#{props.docNo}</p>
      <p>{props.fileName}</p>
    </div>
  )
}

export default Post