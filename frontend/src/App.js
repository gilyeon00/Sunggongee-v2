import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import Header from './component/Header';
import Login from './component/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <section>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />  
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
