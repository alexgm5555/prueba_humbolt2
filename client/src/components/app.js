import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showCoordenates } from '../actions' 
import  Mapas  from './Mapa' 
import  Footer  from './Footer' 

class App extends Component {
  componentDidMount(){
    console.log(this)
      }
  render() {
    return (
      <div>
        <Mapas/>
        <Footer/>
      </div>
    );
  }
}
const mapStateToProps = function (state){
    return {
        coordenates: state.coordenates.list, 
        coordenatesNew: state.coordenates.listNew 
    } 
  }
export default connect(mapStateToProps,showCoordenates)(App);

