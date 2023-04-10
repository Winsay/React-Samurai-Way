import './App.css';
import React, { Suspense, lazy } from 'react';
import ProfileContainer from './components/Main/ProfileContainer';
import { Route, Routes, useParams, BrowserRouter as Router } from 'react-router-dom';
// import MessagesContainer from './components/Messages/MessagesContainer';
// import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializationAppTC } from './redux/app-reducer ';
import PreloaderSpinner from './components/common/preloader/PreloaderSpinner';
import NavComponent from './components/Nav/NavContainer';
import store from './redux/redux-store';


const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))
const MessagesContainer = lazy(() => import('./components/Messages/MessagesContainer'))

class App extends React.Component {

  componentDidMount() {
    this.props.initializationAppTC();
    // this.props.setUserDataTC();
  }

  render() {
    if (!this.props.initialized) {
      return (
        <PreloaderSpinner height={100} />
      )
    }
    return (
      <div className="App">
        <div className="content">
          <HeaderContainer />
          <NavComponent />
          <div className="mainWrapper">
            <Suspense fallback={<div><PreloaderSpinner height={90} /></div>}>
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
            </Suspense>

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


const AppContainer = compose(
  connect(mapStateToProps, { initializationAppTC }),
)(App)


const SamuraiJSApp = (props) => {
  return <Router>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </Router>
}

export default SamuraiJSApp;