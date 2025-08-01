import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  

  <div className="flex w-[70%] h-[465px] rounded-lg overflow-hidden shadow-lg">
    

    <div className="w-1/2 bg-cover bg-center flex flex-col justify-center items-center text-white" style="background-image: url('/photo/lens-582605_1280.jpg');">
      <nav className="text-center mt-4">
        <h1 className="text-4xl font-bold mb-2 leading-none">EXPLORER</h1>
        <p className="mb-20 text-lg">For High Quality Photography</p>
        <p className="mb-4">Contact with me</p>
        <div className="flex justify-center gap-3 text-xl">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
      </nav>
    </div>

    
    <div class="w-1/2 bg-white flex flex-col justify-center px-8">
      <h2 class="text-[45px] font-bold mb-2">Welcome!</h2>
      <h4 class="text-center text-lg mb-6">Please login</h4>
      
      <form class="space-y-4">
        
        <div class="flex items-center bg-gray-400 rounded px-3 py-2">
          <i class="fa-solid fa-user text-black mr-3"></i>
          <input type="text" id="username" name="username" placeholder="Username" required class="w-full bg-transparent outline-none text-black placeholder:text-black" />
        </div>

        
        <div class="flex items-center bg-gray-400 rounded px-3 py-2">
          <i class="fa-solid fa-lock text-black mr-3"></i>
          <input type="password" id="password" name="password" placeholder="Password" required class="w-full bg-transparent outline-none text-black placeholder:text-black" />
        </div>

        
        <div class="flex justify-center">
          <button type="submit" className="px-12 py-2 text-white rounded bg-gradient-to-r from-cyan-900 to-blue-200 hover:from-cyan-800 hover:to-blue-300">
            <i class="fa-solid fa-right-to-bracket mr-2"></i>Login
          </button>
        </div>

        
        <div class="text-center mt-4 text-sm">
          <p>Forgot Password? <a href="#" class="text-blue-600 hover:underline">Click here to reset</a></p>
        </div>
      </form>
    </div>

  </div>


    </>
  )
}

export default App
