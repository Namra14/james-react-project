import { useState } from 'react'
import myProfile from './img/Grad-Pic-1.jpg'
import './App.css'
import './styles.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='card'>
          <img src={myProfile} className="picture" alt="Vite logo" />
      <h1 className='name'>James Angeles</h1>
      <p className='des'>Front-End Developer</p>
      <a href="https://namra14.github.io/JamesRolandAngeles-Portfolio/" className='link' target='_blank'>MyProfolio</a>
        <div className='button'> 
          <a href="">
            
            <button> <i class="bi bi-envelope-at-fill"></i>Email </button>
          </a>
          <a href="">
            <button className='btn2'><i class="bi bi-linkedin"></i>LinkedIn</button>
          </a>
        </div>

        <div className='about'>
          <h3>About</h3>
          <p className='des1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempore aliquid deserunt magni ipsa nihil tempora sint voluptates temporibus, atque, 
            odit commodi. Eum libero laborum itaque necessitatibus quo a saepe mollitia?</p>
        </div>

        <div className='int'>
          <h3>Interest</h3>
          <p className='des2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempore aliquid deserunt magni ipsa nihil tempora sint voluptates temporibus, atque, 
            odit commodi. Eum libero laborum itaque necessitatibus quo a saepe mollitia?</p>
        </div>
        
       
      </div>
  )
}

export default App
