import './App.css';
import React from 'react';
import ProfileContainer from './components/Main/ProfileContainer';
import Nav from './components/Nav/Nav';
import { Route, Routes, useParams } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializationAppTC } from './redux/app-reducer ';
import PreloaderSpinner from './components/common/preloader/PreloaderSpinner';


class App extends React.Component {

  componentDidMount() {
    this.props.initializationAppTC();
    // this.props.setUserDataTC();
  }

  render() {
    if (!this.props.initialized) {
      return (
        <PreloaderSpinner />
      )
    }
    return (
      <div className="App">
        <div className="content">
          <HeaderContainer />
          <Nav //friendData={store.getState().friendData} 
          />
          <div className="mainWrapper">
            <Routes>
              <Route path='/'
                element={<LoginContainer />} />
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
              <Route path='/login'
                element={<LoginContainer />} />
            </Routes>
          </div>
        </div>
      </div >
    )
  };
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}


export default compose(
  connect(mapStateToProps, { initializationAppTC }),
)(App)
