import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const App = () => {
  const data = useParams()
  console.log(data.id)
  return (
    <>
      <div>App</div>
      <Outlet/>
    </>
  )
}

export default App