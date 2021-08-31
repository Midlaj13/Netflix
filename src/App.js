import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar'
import RoePost from './Components/RowPost/RoePost';
import {orginals,romance} from './Components/urls'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RoePost url={orginals} title="Netflix Orginals"/>
      <RoePost url={romance} title="Romance" isSmall/>
    </div>
  );
}

export default App;
