import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Main/Main';
import Nav from './components/Nav/Nav';

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
