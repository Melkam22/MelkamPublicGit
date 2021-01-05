import React, {Component} from 'react';
import Image from '../resources/images/melkamethiopiaLogo.png';

class melkamOrdersForm extends Component {

    //to be replaced later
    /* state = {
        No: '',
        OrderReceptionDate: '',
        Name: '',
        OrderTitle: '',
        VeganVegetarian: '',
        InjeraQuantity: '',
        DeliveredTo: '',
        DeliveryDate: '',
        Action: ''
}   */
state = {
    ... this.mealFormFunction()
}

mealFormFunction(){
    if(this.props.currentIndex == -1)
        return{
            No: '',
            OrderReceptionDate: '',
            Name: '',
            OrderTitle: '',
            VeganVegetarian: '',
            InjeraQuantity: '',
            DeliveredTo: '',
            DeliveryDate: '',
            RecipeFormat: ''
        }
    else return this.props.orders[this.props.currentIndex];
} 

componentDidUpdate (prevProps){
    if(prevProps.currentIndex != this.props.currentIndex || prevProps.orders.length != this.props.orders.length)
    this.setState({
        ... this.mealFormFunction()
    })
}  


handleChange = (e) =>{
    this.setState({
        [e.target.name] : e.target.value
    })
}


handleSubmit = (e) =>{
    e.preventDefault()
    this.props.addEditDelete(this.state)
} 

    render(){
        //console.log(this.state);
  return (    
    <form onSubmit={this.handleSubmit} autoComplete="off">
       <p><a href="https://www.melkamethiopia.de" target="_blank"><img className="myLogo" src={Image}/> </a></p>
       <input name="No" placeholder="Order No." value={this.state.No}
       onChange={this.handleChange} className="input"/>

        <input name="OrderReceptionDate" placeholder="Order Reception Date" value={this.state.OrderReceptionDate}
       onChange={this.handleChange} className="input" />

        <input name="Name" placeholder="Name" value={this.state.Name}
       onChange={this.handleChange} className="input" />

        <input name="OrderTitle" placeholder="Order Title" value={this.state.OrderTitle}
       onChange={this.handleChange} className="input" />

      <input name="VeganVegetarian" placeholder="Vegan or Vegetarian" value={this.state.VeganVegetarian}
       onChange={this.handleChange} className="input" />

      <input name="InjeraQuantity" placeholder="Injera Quantity" value={this.state.InjeraQuantity}
       onChange={this.handleChange} className="input" />

      <input name="DeliveredTo" placeholder="Delivered To:" value={this.state.DeliveredTo}
       onChange={this.handleChange} className="input" />

      <input name="DeliveryDate" placeholder="Delivery Date" value={this.state.DeliveryDate}
       onChange={this.handleChange} className="input" />

     <input name="RecipeFormat" placeholder="Recipe Format" value={this.state.RecipeFormat}
       onChange={this.handleChange} className="input" />

       <button id="btn" type="submit">Submit</button>

      {/*  <a class="btn-floating btn-large waves-effect waves-light red"> <i class="fa fa-plus-circle" aria-hidden="true"></i> </a> */}
</form>
  );
}
}

export default melkamOrdersForm;