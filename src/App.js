import {HomeScreen} from './Ui/Screens/home/home.js';
import { SortearUm } from './Ui/Screens/sortearUm/sortearUm.js';
import { SortearGrupo } from './Ui/Screens/home/sortearGrupo/sortearGrupo.js';
import './App.css';
import { Switch, Route, Redirect, useHistory } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <HomeScreen/>
        </Route>

        <Route path="/sortear-um" exact>
          <SortearUm/>
        </Route>

        <Route path="/sortear-grupo" exact>
          <SortearGrupo/>
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
