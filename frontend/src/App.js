import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import Header from './component/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <section>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
