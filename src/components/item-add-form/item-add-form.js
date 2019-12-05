import React,{Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
    state = {
        label: ''
    }
    onLabelCHange = (event) => {
       this.setState({
           label:event.target.value,
          
       })
     
    }
    onSubmit = (event) => {
        event.preventDefault()
        this.props.onItemAdded(this.state.label)
        this.setState({
            label: ''
        })
       
    }
    render(){
        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       placeholder="what needs to be done" 
                       onChange={this.onLabelCHange} 
                       value={this.state.label}
                ></input>
                <button className="btn btn-outline-secondary" type="submit">Add Item</button>
            </form>
        )
    }
}
