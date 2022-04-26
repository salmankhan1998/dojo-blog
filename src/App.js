import {Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Create from './components/Create/Create';
import BlogDetails from './components/Blogsdetails/BlogDetails'
import '../src/styles/index.scss';

function App() {
  return (
   
      <div>
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/blogs/:id" element={<BlogDetails/>} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
