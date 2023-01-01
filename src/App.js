import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar'
import DemoForm from './Components/DemoForm'
import CardDemo from './Components/CardDemo';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
