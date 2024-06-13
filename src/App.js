import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Preview from "./component/preview";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route element={<Preview/>} path={"/preview"}/>

            </Route>
          </Routes>
        </BrowserRouter>

      </>
  );
}

export default App;
