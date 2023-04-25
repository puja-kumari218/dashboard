import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import React from 'react';


const App = () => {
  return <div id="dashboard">

    <div className='innerdiv'>

    <BrowserRouter>
      <Routes>
        <Route path="http://dashboard-five-rouge.vercel.app/" element={<Layout/>}>

          <Route path="http://dashboard-five-rouge.vercel.app/dashboard" element={<Dashboard/>}/>
          
        </Route>

      </Routes>
    </BrowserRouter> 
    </div>
  </div>
};

export default App;
