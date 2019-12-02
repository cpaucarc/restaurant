import React, {Component} from 'react';
import './styles/Card.css';

class Card extends Component{ // Recibira como parametro TITULO, LINK_IMAGEN, DESCRIPCION, TIEMPO
    render(){
        return(
            <div className="card col-lg-5 mt-4 ml-5">
                <img src={this.props.image} className="img-fluid" alt={this.props.image}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{this.props.time}</li>
                </ul>
            </div>
        )
    }
}

export default Card;