import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Doodles from './Components/Doodles';
import FAQ from './Components/FAQ';
import NoPage from './Components/NoPage';
import SideBar from './Components/SideBar';
import Checklist from './Components/Checklist';
import DnDFetch from './Components/DnDFetch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<Home />} />
          <Route path="doodles" element={<Doodles />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="*" element={<NoPage />} />
          <Route path="checklist" element={<Checklist />} />
          <Route path="dnd" element={<DnDFetch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
