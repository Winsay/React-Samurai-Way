import './App.css';
import ProfileContainer from './components/Main/UserInfo/ProfileContainer';
import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer';


function App() {
  return (
    <div className="App">
      <div className="content">
        <HeaderContainer />
        <Nav //friendData={store.getState().friendData} 
        />
        <div className="mainWrapper">
          <Routes>
            <Route path='/profile'
              element={<ProfileContainer />} >
              <Route path=':userId'
                element={<ProfileContainer />} />
            </Route>
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
