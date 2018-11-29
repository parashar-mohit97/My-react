import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import UserItem from './UserItem';
import AddItem from './AddItem';
import Form from './Form.js';
import Test from './Test.js';
import Home from './Home.js';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'


const users= [
{
    name: 'Mohit Parashar',
    age: 21,
    sex: 'Male',
    number: 9133234328,
    DOB:'08/03/1997',
    Company: 'GGK'

},
{
    name: 'Sugam Gandhi',
    age:22,
    sex: 'Male',
    number: 9133234318,
    DOB:'03/01/1996',
    Company: 'GGK'
}
];

localStorage.setItem('users', JSON.stringify(users) );

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users : JSON.parse(localStorage.getItem('users'))
    };
    this.onAdd = this.onAdd.bind(this);
    this.onDelete= this.onDelete.bind(this);
    this.onEditSubmit= this.onEditSubmit.bind(this);
  }

  componentWillMount(){
    const users = this.getUsers();
    this.setState({users});
  }
  getUsers(){
    return this.state.users;
    
    
  }

  onAdd(name, age,sex, number,DOB,Company){
    const users = this.getUsers();

   users.push({name, age,sex, number,DOB,Company});

    this.setState({users});
  }

  onDelete(name) {
    const users = this.getUsers()
    const filteredUsers = users.filter(user => {
      return user.name !==  name;
     
    });
     this.setState({users: filteredUsers}); 

    //this.setState...
  }
  onEditSubmit(name, age,sex, number,DOB,Company, originalName)
  {
    let users= this.getUsers();

    users = users.map(user=>{
      if (user.name ===originalName){
        user.name= name;
        user.age = age;
        user.sex= sex;
        user.number= number;
        user.DOB = DOB;
        user.Company=Company;
      }
      return user;

    })
  }


 
  render() {
    
      return (
      <div className="App">
        <h1>My First CRUD app</h1>

    
    <AddItem
      onAdd={this.onAdd} />

        
          {
          this.state.users.map(user => {
            return(
            <
            UserItem
            key={user.name}
            {...user}
            onDelete={this.onDelete}
            onEditSubmit={this.onEditSubmit}
            />
            );
          })
        }
     </div>
    );
  }
}

export default App;
