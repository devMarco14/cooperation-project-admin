import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CafeInfo from './pages/CafeInfo';
import Gyeonggi from './pages/Gyeonggi';
import Incheon from './pages/Incheon';
import Main from './pages/Main';
import Seoul from './pages/Seoul';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/seoul" element={<Seoul />} />
        <Route path="/gyeonggi" element={<Gyeonggi />} />
        <Route path="/incheon" element={<Incheon />} />
        <Route path="/cafeinfo" element={<CafeInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
