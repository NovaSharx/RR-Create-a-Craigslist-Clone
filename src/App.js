// Import data
import Searchbar from './searchbar'
import Sidebar from './sidebar'
import Gallery from './gallery'
import Directory from './directory';

// Import components
import './App.css';

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Searchbar />
        <Directory />
        <Gallery />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
