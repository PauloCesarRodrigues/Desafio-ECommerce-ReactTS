import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/index';
import { Defaultlayout } from './layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Defaultlayout />}>
      <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
