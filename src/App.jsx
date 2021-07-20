import './App.css';
import FrontPage from './FrontPage'
import {StyleRoot} from 'radium'
import  BackgroundPage  from './BackgroundPage';

function App() {
  return (
    <StyleRoot>
    <div className="App">
    <FrontPage/>
    <BackgroundPage />
    </div>
    </StyleRoot>
  );
}

export default App;
