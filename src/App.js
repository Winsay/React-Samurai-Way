import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Messages from './components/Messages/Messages';
import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';


function App(props) {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Nav />
        <div className="mainWrapper">
          <Routes>
            <Route path='/profile'
              element={<Main dataPost={props.dataPost} />}
            />
            <Route path='/messages/*' // звезда в конце ипспользуется при необходимости нестрогого совпадения ссылки то есть после /messages/ можно указывать любое продолжение и ничего не поменяется
              element={<Messages />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
