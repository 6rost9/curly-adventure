import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Protected from './components/Protected';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <Protected>
            <Home />
          </Protected>
        } />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
