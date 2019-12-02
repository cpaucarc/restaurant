import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Card from './components/Card';
import data from './data.json';
import comida from './eats.json';


var root= document.getElementById('root');

ReactDOM.render(<App data={data}/>, root);

class Aux extends React.Component{
    render(){
        return(
            <div className="row row-cols-1 row-cols-md-3">
                {
                    this.props.eats.map((eat) => {
                        return <Card title={eat.title} description={eat.description} time={eat.time} image={eat.image} /> //title, image, description, time
                    }
                    )
                }
            </div>
        )
    }
}


ReactDOM.render(<Aux eats={comida}/>, document.getElementById('root2'));