import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Content from './body/Content/Content';
import Footer from './body/Footer/Footer';
import HeaderContainer from './body/Header/HeaderContainer';
import Preloader from './Common/Preloader/Preloader';
import { initializeApp } from './redax/reduseApp';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if(!this.props.isInitialized) {
      return <Preloader/>
    }
    return (
       <div className='appWrapper'>
        <HeaderContainer />
        <Content />
        <Footer />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  isInitialized : state.app.isInitialized,
});


export default connect(mapStateToProps, {initializeApp})(App);
