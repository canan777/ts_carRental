import Header from "./components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainPage from "./pages/MainPage";

const App = (): JSX.Element => {
   return (
   <BrowserRouter>
   <Header/>

   <Routes>
    <Route path="/" element={< MainPage />}/>
   </Routes>
   </BrowserRouter>
    
  );
};

export default App;
