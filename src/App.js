import logo from './logo.svg';
import './App.css';
import ChildComponent from './project/ChildComponent/ChildComponent';


function App() {
  return (
    <div className="App">
      
        <ChildComponent/> {/* 
        A component should always start with a capital letter or the rendering won't work.

        this is a second level component in the hierarchy. 
        */}

        <img src={logo} className="App-logo" alt="logo" /> 

    </div>
  );
}

export default App;
