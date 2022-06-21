import logo from './logo.svg';
import './App.css';
import ChildComponent from './ChildComponent';


function App() {
  return (
    <div className="App">
      
        <ChildComponent/> {/* A component should always start with a capital letter or the rendering won't work */}
        <img src={logo} className="App-logo" alt="logo" />

    </div>
  );
}

export default App;
