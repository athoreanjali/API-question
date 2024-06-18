import Ques1 from './Ques1';
import Ques2 from './Ques2';
import Ques3 from './Ques3';
import Ques4 from './Ques4';
import "./App.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter className="box">
      <h1>API QUESTIONS</h1>
      <hr />
      <Link to="/Ques1" className="one">Ques1</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/Ques2" className="two">Ques2</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/Ques3" className="three">Ques3</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/Ques4" className="four">Ques4</Link>
      <hr />

      <Routes>
        <Route path="/Ques1" element={<Ques1 />}></Route>
        <Route path="/Ques2" element={<Ques2 />}></Route>
        <Route path="/Ques3" element={<Ques3 />}></Route>
        <Route path="/Ques4" element={<Ques4 />}></Route>
      </Routes>

    </BrowserRouter>
  );
}
export default App;