import {Routes, Route} from "react-router-dom"
import "./App.css"
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import MainPage from "./MainPage";


function App() {

  return (
    <>
      <Routes>
           <Route path="/Signin" element={<Signin />}/>
          <Route path="/Signup" element={<Signup />}/> 
          <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default App
