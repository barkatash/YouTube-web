import './App.css';
import './navbar/Navbar.js';
import Navbar from './navbar/Navbar.js';
import Sidebar from './sidebar/Sidebar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
