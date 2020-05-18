import React, {Component} from 'react';

class Card extends Component {
    render(){
        const {name, email}=this.props;
        return(
            <div className="ma2 w-40 bg-light-pink">
                <img className="w4" alt ="avatar" src={`https://avatars.dicebear.com/v2/avataaars/${email}.svg`}/>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        )
    }
}
export default Card;