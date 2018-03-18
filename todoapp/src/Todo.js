import React from "react";
import Checkbox from './Checkbox';

class Todo extends React.Component {



//style={{"text-decoration": "line-through"}}
	render() {
		return (
			<li key={this.props.obj.id} >
				<Checkbox 
					complete={this.props.obj.done} 
					onCBClickHandler={this.props.onCBClickHandler.bind(this, this.props.obj.id)} /> 
				{this.props.obj.description}, 
				{this.props.obj.deadline}
			</li>
			
		);

	}
}

export default Todo; 


