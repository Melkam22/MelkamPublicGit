import React, {Component} from 'react';
import MelkamOrdersForm from './melkamOrdersForm';


class melkamOrders extends Component {
    state = {
        orders : this.mealFunction(),
        currentIndex: -1,
    } 

    mealFunction(){
        if (localStorage.getItem('mealPlan') == null)
            localStorage.setItem('mealPlan', JSON.stringify([]));
            return JSON.parse(localStorage.getItem ('mealPlan'))
    }

    addEditDelete = (data) =>{
        let orders = this.mealFunction();
        if(this.state.currentIndex === -1)//nothing there, add data
        orders.push(data)
            else orders[this.state.currentIndex] = data//the current data remains the same
            localStorage.setItem('mealPlan', JSON.stringify(orders))
            this.setState({
                orders: orders, 
                currentIndex: -1
            })
    }

    editItem = (a) =>{
        this.setState({
            currentIndex: a
        })
    }

    deleteItem = (a) =>{
        let orders = this.mealFunction()
        orders.splice(a, 1)
        {localStorage.setItem('mealPlan', JSON.stringify(orders))
        this.setState({
            orders: orders,
            currentIndex: -1
        })
    }
}

    render(){
  return (
    <div>
       <MelkamOrdersForm addEditDelete={this.addEditDelete} 
            orders={this.state.orders}
            currentIndex={this.state.currentIndex} 
       />

{/* map function */}

<table id="table">
            <tbody>
                {this.state.orders.map((myItems, a)=>{
                    return(
                    <tr key={a} id="tr">
                        <td id="td">{myItems.No}</td>
                         <td id="td">{myItems.OrderReceptionDate}</td>
                        <td id="td">{myItems.Name}</td>
                        <td id="td">{myItems.OrderTitle}</td>
                        <td id="td">{myItems.VeganVegetarian}</td>
                        <td id="td">{myItems.InjeraQuantity}</td>
                        <td id="td">{myItems.DeliveredTo}</td>
                        <td id="td">{myItems.DeliveryDate}</td>
                        <td id="td">{myItems.RecipeFormat}</td>
                        <div id="actionButtons"> 
                        <button id="edit" onClick={()=>this.editItem(a)}>Edit</button>
                        <button id="delete" onClick={()=>this.deleteItem(a)}>Delete</button>
                        </div> 
                    </tr>
                    )
                })}
            </tbody>
        </table>


    </div>
  );
}
}

export default melkamOrders;