import { BrowserRouter,Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import ListEvent from "./ListEvent/ListEvent";
import CreateEvent from "./CreateEvent/CreateEvent";
import Event from "./Event/Event";

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
