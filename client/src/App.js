import {Routes, Route, Link} from 'react-router-dom';

import AllDebuts from "./AllDebuts";
import Home from './Home';
import CreateDebut from './CreateDebut';
import OneDebut from './OneDebut';

function App() {
  return (
    <>
      <h1>This is an MCU app, see what year each hero debuted.</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/debuts">See All Debuts</Link></li>
          <li><Link to="/debuts/create">Add A Debut</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/debuts' element={<AllDebuts />} />
        <Route path="/debuts/create" element={<CreateDebut />} />
        <Route path='/debuts/:name' element={<OneDebut />} />
      </Routes>
    </>
  );
}

export default App;
