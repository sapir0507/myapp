import Demo1PropsParent from './project/Demo1_Props/Demo1_PropsParent';
import './App.css';



function App() {
  return (
    <div className="App">
       {/* 
        A component should always start with a capital letter or the rendering won't work.

        this is a second level component in the hierarchy. 
        */}
        <Demo1PropsParent></Demo1PropsParent>
       

    </div>
  );
}

export default App;
