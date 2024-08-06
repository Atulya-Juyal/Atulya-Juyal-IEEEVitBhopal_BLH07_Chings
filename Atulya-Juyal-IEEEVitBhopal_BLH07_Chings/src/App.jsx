import { useState } from 'react'
import './App.css'
import Nav from './components/nav'
import Manager from './components/manager';
import Footer from './components/footer';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav></Nav>
    <Manager></Manager>
    <Footer></Footer>
    </>
  )
}

export default App


