import { Route, Routes } from "react-router-dom";
import { Homeview } from "./views/home";
import { NotFoundView } from "./views/NotFound"

function App() {
  return (
    <Routes>
    <Route path='/' element={<Homeview />} />
    <Route path='*' element={<NotFoundView/>} />
  </Routes>
   );
}

export default App;
