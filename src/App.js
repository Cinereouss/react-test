import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layouts/layout';
import { ToDoPage } from './pages/to-do';
import { MealPage } from './pages/meal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ToDoPage />}></Route>
          <Route path="/meals" element={<MealPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
