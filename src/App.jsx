import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostList from './components/PostList'

function App() {
  return (
    <main className='appStyle'>
      <PostList/>
    </main>
  )
}

export default App
