import './App.css';
import './style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AllNews } from './components/AllNews';
import { SingleNewsPage } from './components/SingleNewsPage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<AllNews />} />
          <Route path='/:id' element={<SingleNewsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
