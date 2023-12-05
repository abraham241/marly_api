import { useState } from 'react'
import Formulaire from './screen/Formulaire'
import Liste from './screen/liste'
import Page_ajout from './screen/Page_ajout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Liste/>
      <Page_ajout/>
      <Formulaire/>
      <h1 className='text-5xl'>
        MBolo
      </h1>
    </>
  )
}

export default App
