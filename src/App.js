import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from "./components/navBar/navBar";
import Home from "./pages/home/home";
import SinglePost from "./pages/singlePost/singlePost";
import Write from "./pages/write/write";
import Settings from "./pages/settings/settings";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
function App() {
  // const user = true;
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Route path='/register' element={user ? <Home /> : <Register />}/> */}
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        {/* <Route path='/write' element={user ? <Write /> : <Register />}/> */}
        <Route path='/write' element={<Write />}/>
        <Route path='/settings' element={<Settings />}/>
        <Route path='/post/:postId' element={<SinglePost />}/>
      </Routes>
    </Router>
  );
}

export default App;
