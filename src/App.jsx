import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import React from 'react';


const App = () => {
  return <div id="dashboard">

    <div className='innerdiv'>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route path="/" element={<Dashboard/>}/>
          
        </Route>

      </Routes>
    </BrowserRouter> 
    </div>
  </div>
};

export default App;
