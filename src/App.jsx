import { BrowserRouter,Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import ListEvent from "./page/ListEvent/ListEvent";
import CreateEvent from "./page/CreateEvent/CreateEvent";
import Event from "./page/Event/Event";

function App() {
  return (
    <BrowserRouter basename="eventplanet">
      <Routes>
        <Route path="" element={<Header/>}>
          <Route index path="list" element={<ListEvent/>} />
          <Route path="createvent" element={<CreateEvent/>}/>
          <Route path="event" element={<Event/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
