import './App.css';
import { LeftMenuu } from './Components/LeftMenuu';
import {MainContainer} from './Components/MainContainer';
import {RightMenu} from './Components/RightMenu';


function App() {
  return (
    <div className="App">
      <LeftMenuu/>
      <MainContainer/>
      <RightMenu/>

      <div className="background"></div>
    </div>
  );
}

export default App;
