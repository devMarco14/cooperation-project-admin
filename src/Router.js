import Sider from './pages/Sider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gyeonggi from './pages/Gyeonggi';
import Incheon from './pages/Incheon';
import Main from './pages/Main';
import Seoul from './pages/Seoul';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/seoul" element={<Seoul />} />
        <Route path="/gyeonggi" element={<Gyeonggi />} />
        <Route path="/incheon" element={<Incheon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
