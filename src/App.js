import Title from './components/Title';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstRequest from './final/examples/1-first-request';
import ImageContent from './final/examples/ImageContent';
import SharedLayout from './final/examples/SharedLayout';
import { useState } from 'react';
function App() {
  const [data,setData] = useState();
  return (
    <main>
       <Title />
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<SharedLayout/>}>
            <Route index  element={<FirstRequest setData = { setData }/>}/>
            <Route path=':dataId' element={<ImageContent   data = { data }/>} />
          </Route>
      </Routes>
      </BrowserRouter>
      <Title />
     
    </main>
  );
}

export default App;
