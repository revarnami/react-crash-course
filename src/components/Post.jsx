import { Link } from 'react-router-dom'
import postcss from './Post.module.css'

function Post(props) {
  return (
    <li className={postcss.post}>
      <Link to={props.id}>
        <p>#{props.docNo}</p>
        <p>{props.fileName}</p>
      </Link>
    </li>
  )
}

export default Post