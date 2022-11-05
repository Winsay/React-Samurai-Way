import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Nav />
        <Profile />
      </div>
    </div>
  );
}

export default App;
