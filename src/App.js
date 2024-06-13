import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Preview from "./component/preview";
import Share from "./component/share";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route element={<Preview/>} path={"/preview"}/>
              <Route element={<Share/>} path={"/share"}/>
            </Route>
          </Routes>
        </BrowserRouter>

      </>
  );
}

export default App;
