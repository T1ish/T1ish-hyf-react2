import React from "react";
import Checkbox from './Checkbox';

class Todo extends React.Component {

	onClickHandler(){
		console.log("I have been clicked!");
	}

//style={{"text-decoration": "line-through"}}
	render() {

		return (
			<li key={this.props.id} ><Checkbox onClick={this.onClickHandler}></Checkbox> {this.props.item}, {this.props.date}</li>
			
		);

	}
}

export default Todo; 


