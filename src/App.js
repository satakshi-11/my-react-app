
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { Route, Routes } from 'react-router';

function App() {
  const [mode,setMode]=useState('light');

  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const removebodyclasses=()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
  }

  
  const toggleMode=(cls)=>{
    removebodyclasses()
    document.body.classList.add('bg-'+cls)
    
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#000435';
      showAlert(' Dark mode has been enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(' Light mode has been enabled',' success');
    }
  }
  return (
    <>
    <Navbar title="Textutils" about="About Textutils" mode={mode}  toggleMode={toggleMode}/>
     <Alert alert={alert}/>
    <div className="container my-3">
	   <Routes>
		 <Route exact path='/about' element={<About mode={mode}/>}></Route>
     <Route exact path='/' element=
     {<TextForm showAlert={showAlert} mode={mode}heading="Enter the text to analyse below"/> }></Route>         
     </Routes>
     </div>
     
      </>
  )

}

export default App;
