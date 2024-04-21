import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layouts/layout';
import { ToDoPage } from './pages/to-do';
import { MealPage } from './pages/meal';
import Countdown from "./components/card/";
import { TestPage } from "./pages/test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ToDoPage />}></Route>
          <Route path="/meals" element={<MealPage />}></Route>
        </Route>

        <Route path="count-down" element={<Countdown />}/>
        <Route path="test" element={<TestPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
