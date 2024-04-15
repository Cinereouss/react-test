import './App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Layout} from './layouts/app/layout';
import {ToDoPage} from './pages/to-do';
import {MealPage} from './pages/meal';
import {TestPage} from "./pages/test";
import {TestPage2} from "./pages/test2";
import {LoginLayout} from "./layouts/login";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<ToDoPage/>}></Route>
          <Route path="/meals" element={<MealPage/>}></Route>
          <Route path="/test" element={<TestPage/>}></Route>
          <Route path="/test2" element={<TestPage2/>}></Route>
        </Route>
        <Route path="/login" element={<LoginLayout/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
