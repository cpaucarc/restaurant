import React, {Component} from 'react'

class Rows extends Component{ //Recibira 'name', 'last', 'avatar' y 'i'
    render(){
        return (
            <tr key={this.props.i}>
                <td>{this.props.i}</td>
                <td>{this.props.last}</td>
                <td>{this.props.name}</td>
                <td><img className="avatar" src={this.props.avatar} alt="una_imagen_deberia_ir_aqui.png" /></td>                
            </tr>
        )
    }
}

class Heads extends Component{
    render(){
        return(
            <thead className='thead-dark'>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Avatar</th>
                </tr>
            </thead>
        )
    }
}

class App extends Component{ //recibira un arreglo 'data'
    render(){
        return(
            <table className="table table-striped">
                <Heads/>
                <tbody>
                    {
                        this.props.data.map((persona, i)=> {
                            return <Rows i={i} name={persona.name} last={persona.last_name} avatar={persona.avatar}/>
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default App;