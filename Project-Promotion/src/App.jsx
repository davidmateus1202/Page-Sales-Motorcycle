import { BrowserRouter, Routes, Route } from "react-router-dom"

//Paginas 
import Home from "./pages/Home"
import Error404 from "./pages/Error404"
import ProductDetail from "./pages/ProductDetail"

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Error404/>}/>
        <Route path="/details" element={<ProductDetail/>}/>
      </Routes>

    </BrowserRouter>
      
    </>
  )
}

export default App
