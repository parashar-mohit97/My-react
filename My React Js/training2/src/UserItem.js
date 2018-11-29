import React, { Component } from 'react';

class UserItem extends Component {
  constructor(props){
    super(props);
    this.state={
      isEdit: false
    };

    this.onEdit= this.onEdit.bind(this);
    this.onDelete= this.onDelete.bind(this);
    this.onEditSubmit= this.onEditSubmit.bind(this);
  }

  onDelete(){
    
    const {onDelete, name}=this.props;
    onDelete(name);
  }

  onEdit() {
    this.setState({ isEdit:true});
  }
  onEditSubmit(event){
    event.preventDefault();
    
    this.props.onEditSubmit(this.nameInput.value, this.AgeInput.value, this.SexInput.value, this.NumberInput.value, this.DOBInput.value,
   this.CompanyInput.value, this.props.name );

    this.setState({ isEdit: false});
  }
 
 
  render() 
    {
    const {name, age, sex, number, DOB, Company} = this.props;
    
      return (
      <div >
            {
              this.state.isEdit
              ? (
                <form onSubmit={this.onEditSubmit}>  
                  <input placeholder="Name"  ref={nameInput => this.nameInput =nameInput} defaultValue={name} />
        <input placeholder="Age"  ref={AgeInput => this.AgeInput =AgeInput} defaultValue={age} />
        <input placeholder="Sex"  ref={SexInput => this.SexInput =SexInput} defaultValue={sex} />
        <input placeholder="Number"  ref={NumberInput => this.NumberInput =NumberInput} defaultValue={Number}  />
        <input placeholder="DOB"  ref={DOBInput => this.DOBInput =DOBInput} defaultValue={DOB} />
        <input placeholder="Company"  ref={CompanyInput => this.CompanyInput =CompanyInput} defaultValue={Company} />

              <button>Save</button>

                </form>
                )
             
              : (
                <div>
            <span>{name}</span>
             {'|'} 
             <span>{age}</span>
             {'|'}
             <span>{sex}</span>
             {'|'} 
             <span>{number}</span>
             {'|'}
             <span>{DOB}</span>
             {'|'} 
             <span>{Company}</span>
             {'|'} 
             <button  onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) this.onDelete(e) } }>
              Delete
             </button>
             {'|'}
             <button onClick={this.onEdit}>Edit</button>
             </div>
             )
         }     
      </div>

            
             );
    }
}
        
      

export default UserItem;
