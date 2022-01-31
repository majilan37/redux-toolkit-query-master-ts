import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import Comments from "./components/Comments";
import Posts from "./components/Posts";
import User from "./components/User";
import Users from "./components/Users";



function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/comments' element={<Comments />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<User />} />
        <Route path='/add-user' element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
