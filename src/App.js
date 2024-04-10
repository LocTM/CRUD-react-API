import logo from './logo.svg';
import './App.css';
import Demo from "./Demo";
import Home from "./components/Home";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
   <>
        <div className={"container"}>
       <Routes>
           <Route path={''} element={<Home></Home>}></Route>
           <Route path={'/create'} element={<Create></Create>}></Route>
           <Route path={'/edit/:id'} element={<Update></Update>}></Route>
           <Route path={'/read/:id'} element={<Read></Read>}></Route>
       </Routes>
        </div>
   </>
  );
}

export default App;
