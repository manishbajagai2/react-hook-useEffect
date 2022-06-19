import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const[resourceType, setResourceType] = useState('posts')
  const[items,setItems] = useState([])

  const[windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  useEffect(() => {
    // console.log('changing')
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
    return ()=>{
      console.log('Fetched from JSON placeholder')
    }
  },[resourceType])

  return (
    <>
      <div className="container">

        <h1>Window width : {windowWidth}</h1>

        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comment</button>
       
        <h1>{resourceType}</h1>
      </div>
      {items.map((item) =>{
        return<pre key={item.id}>
            { (resourceType === 'posts') ? JSON.stringify(item.title) :(resourceType === 'users') ? JSON.stringify(item.name) : JSON.stringify(item.body) }
          </pre>     
      })}
    </>
  )
}

export default App
