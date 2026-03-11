import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { HomePage } from './pages/HomePage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';

export const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations/:id" element={<DestinationDetailPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </AppLayout>
  );
};

export default App;

