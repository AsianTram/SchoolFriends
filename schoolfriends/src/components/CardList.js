import React, {Component} from 'react';
import Card from './Card';

import {connect} from 'react-redux';
import {fetchUsers} from '../actions/simpleAction';


const mapStateToProps=state=>({
    users: state.fetchUsers.users,
    isPending: state.fetchUsers.isPending
})
const mapDispatchToProps=dispatch =>({
    fetchUsers: ()=>dispatch(fetchUsers())
})

class CardList extends Component {
    componentDidMount(){
        this.props.fetchUsers();
    }
    render(){
        const {users, isPending}=this.props;
        // if(isPending){
        //     return <h1>Loading</h1>
        // }
        // else{
        //     if(error){
        //         return <p>error</p>
        //     }
        //     else{
        //         users.map(user=> {return (<Card name={user.name} email={user.email}/>)})
        //     }
        // }
        return isPending ?<h1>Loading</h1> :
        (
            <div className="ma2 pa2 flex flex-wrap justify-around">
                {users.map((user, i)=> (<Card key ={i} name={user.name} email={user.email}/>))}
            </div>
        )
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);