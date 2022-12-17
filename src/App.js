import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer'


function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Nav //friendData={store.getState().friendData} 
        />
        <div className="mainWrapper">
          <Routes>
            <Route path='/profile'
              element={<Main />} />
            <Route path='/messages/*' // звезда в конце ипспользуется при необходимости нестрогого совпадения ссылки то есть после /messages/ можно указывать любое продолжение и ничего не поменяется
              element={
                <MessagesContainer />
              } />
            <Route path='/users'
              element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </div >
  );
}

export default App;
