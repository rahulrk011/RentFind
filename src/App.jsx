import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import SignIn from "./Pages/SignIn"
import About from "./Pages/About"
import SignOut from "./Pages/SignOut"
import Header from "./Components/Header"

export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/sign-in" element={<SignIn />}/>
    <Route path="/sign-out" element={<SignOut />}/>
  </Routes>
  
  </BrowserRouter>
}
