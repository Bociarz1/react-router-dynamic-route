import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Users from "./components/Users";
import User from "./components/User";
import Admin from "./components/Admin";

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="users" element={<Users />}>
          {/* React Router first try to find SPECIFIC ROUTE (admin) and second DYNAMIC ROUTE (userId~could be anything) */}
          <Route path=":userId" element={<User/>}/>
          <Route path="admin" element={<Admin/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
