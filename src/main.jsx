import Posts, {loader as postsLoader} from './routes/Posts.jsx'
import ReactDom from 'react-dom/client'
import './index.css'
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewPost, {action as newPostAction} from './routes/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      { path: '/', element: <Posts />, loader: postsLoader , children: [
        { path: '/create-post', element: <NewPost />, action: newPostAction},
      ]},
    ]
  },
])

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
