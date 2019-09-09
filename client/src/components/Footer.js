import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Footer extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.sendBD}>ELIMINAR TODOS LOS REGISTROS</button>
                <button onClick={this.props.addAllCoordenates}>ADICIONAR TODOS LOS REGISTROS</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps  = dispatch=>({
    sendBD:()=>{
        console.log('')
        dispatch({
            type:'DELETE_COORDENATES',
        })
    },
    addAllCoordenates:()=>{
        dispatch({
            type:'ADD_COORDENATES',
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
