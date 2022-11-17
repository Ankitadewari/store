import { Routes, Route } from "react-router-dom"
import Cart from "./Cart"
import Entry from "./entry"

import Login from "./Login"
import Products from "./Products"
import Signup from "./Signup"
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Entry/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/products" element={ <Products/>} />
        <Route path="/cart" element={ <Cart/> } />
      </Routes>
    </div>
  )
}

export default App