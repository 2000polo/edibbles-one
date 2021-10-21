import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Donepage from './Pages/Donepage/Donepage';
import { useContext } from 'react';
import { globalDataContext } from './GlobalContext/GlobalContext';

function App() {

  const {dateArray} = useContext(globalDataContext);

  const pDate = new Date()
  pDate.setDate(pDate.getDate());
  const formatDate = (date) => {
      const day = date.getDate();
      const month = date.getMonth()+1;
      const year = date.getFullYear();
      const formatedDate = +day +"/"+ month +"/"+ year
      return formatedDate
  }
  const nDate = new Date()

  const sixDaysAfterCurrentDate = () => {
      for (var i=1; i<=6; i++){
          pDate.setDate(pDate.getDate() + 1);
          console.log(formatDate(pDate));
          dateArray.push(formatDate(pDate))
      }
  }

  sixDaysAfterCurrentDate()
  console.log(dateArray)

  return (
    <Router>
      <div className="App">
        <Route exact path='/'>
          <Login></Login>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/donepage'>
          <Donepage dateArray={dateArray}></Donepage>
        </Route>
      </div>
    </Router>
  );
}

export default App;
