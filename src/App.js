
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Test from './Components/Test/Test';
// import Menubar from './Components/Menubar/Menubar';

function App() {

  const count = () => {
    console.log('hello paici',count);
  };
  return (
    <div className="App">
      <h1 className="text-primary">Hello</h1>

      {/* <Menubar country = {'Bangladesh'}></Menubar> */}
      
      <Test count= {count} ></Test>
    </div>
  );
}

export default App;
