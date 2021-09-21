
import './App.css';
import Cardproduct from './componant/Cardproduct/Cardproduct';
import Fetchproduct from './componant/Fetchproduct/Fetchproduct';
import Navbar from './componant/Navbar/Navbar';
import Searchbox from './componant/Searchbox/Searchbox';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Searchbox></Searchbox>
      <Fetchproduct></Fetchproduct>
      <Cardproduct></Cardproduct>
    </div>
  );
}


export default App;
