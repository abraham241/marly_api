import React from 'react';
import Formulaire from './screen/Formulaire'
import Liste from './screen/Liste'
import Page_ajout from './screen/Page_ajout'
// import Form from './components/Form';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Liste/>}/>
        <Route path='/Formulaire' element={ <Formulaire/>}/>
        <Route path='/Page_ajout' element={ <Page_ajout/>}/>
        {/* <Route path='/Form' element={ <Form/>}/> */}
      </Routes> 
    </BrowserRouter>
  )
}

export default App
