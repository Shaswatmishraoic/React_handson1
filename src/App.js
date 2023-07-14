import React, { useState } from 'react'
import FunctionCompo from './Component/FunctionCompo'
import ClassCompo from './Component/ClassCompo'

function App() {
  const [fState, setFState] = useState(false);
  const [cState, setCState] = useState(false);
  return (
    <>
      <h1>Styling using Functional and Class Components</h1>

      <button onClick={() => setFState(!fState)} class="b1">To see styling in Function components</button>
      <button onClick={() => setCState(!cState)} class="b2">To see styling in Class components</button>
      {fState?<FunctionCompo/>:""}
      {cState && <ClassCompo/>}
    </>
  )
}

export default App

