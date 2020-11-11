import './App.css';
import {Route,BrowserRouter} from 'react-router-dom'
import Home from './container/home';
import DetailLiga from './container/liga/detail.js';
import DetailPartisipasi from './container/liga/teamPartisipasi.js';
import DetailKlasmen from './container/liga/klasmen.js';

function App() {
  return (
    <div className="container">

      <BrowserRouter>
        <Route path='/'  exact component={Home} />
        <Route path='/liga/detail/:id/:name'   component={DetailLiga} />
        <Route path='/liga/partisipasi/:id/:name'   component={DetailPartisipasi} />
        <Route path='/liga/klasmen/:id/:name'   component={DetailKlasmen} />
      </BrowserRouter>

    </div>
  );
}

export default App;
