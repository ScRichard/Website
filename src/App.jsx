import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
function App() {
  return (
    <div className='flex flex-col items-center font-roboto-flex'>
      <Navbar />
      <Content />
    </ div>
  )
}

export default App;
