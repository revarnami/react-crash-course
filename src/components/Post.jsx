import postcss from './Post.module.css'

function Post(props) {
  return (
    <div className={postcss.post}>
      <p>#{props.docno}</p>
      <p>{props.body}</p>
    </div>
  )
}

export default Post