import React, { Component } from 'react';

class AddItem extends Component {
  componentWillUpdate(nextProps, nextState){
    console.log(this.props, this.state, nextProps, nextState);
  }
 constructor(props){
  super(props);

  this.onSubmit= this.onSubmit.bind(this);
  this.onAdd= this.onAdd.bind(this);
 }
 onAdd(name, age,sex, number,DOB,Company){
    const users = this.getUsers();

   users.push({name, age,sex, number,DOB,Company});

    this.setState({users});
  }
  validate = () => {
    let isError = false;
    const errors = {};

    if(this.nameInput.value.length<5){
      isError=true;
      errors.usernameError = 'Username should have atleast 4 characters';
    }

    if(isError){
      this.setState({
        ...this.state,
        ...errors
      });
    }
      return isError;
    }
  }
 
 onSubmit(event){
  
   const err= validate();
  if(!err){
    event.preventDefault();

  this.props.onAdd(this.nameInput.value, this.AgeInput.value, this.SexInput.value, this.NumberInput.value, this.DOBInput.value,
   this.CompanyInput.value );
  //Check for errors
 


  this.nameInput.value='';
  this.AgeInput.value='';
  this.SexInput.value='';
  this.NumberInput.value='';
  this.DOBInput.value='';
  this.CompanyInput.value='';
}

 }
  render() 
    {
    
      return (
        <form onSubmit={this.onSubmit}>
        <h3>Add User</h3>
        <input placeholder="Name"  ref={nameInput => this.nameInput =nameInput} />
        <input placeholder="Age"  ref={AgeInput => this.AgeInput =AgeInput} />
        <input placeholder="Sex"  ref={SexInput => this.SexInput =SexInput} />
        <input placeholder="Number"  ref={NumberInput => this.NumberInput =NumberInput} />
        <input placeholder="DOB"  ref={DOBInput => this.DOBInput =DOBInput} />
        <input placeholder="Company"  ref={CompanyInput => this.CompanyInput =CompanyInput} />
        <button >Add</button>


      <hr />
      </form>
            
             );
    }
}
        
      

export default AddItem;
