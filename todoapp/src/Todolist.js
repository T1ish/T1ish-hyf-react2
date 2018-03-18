import React from "react";
import Todo from "./Todo";
//import Checkbox from "./Checkbox";

class Todolist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
			  {
			    "id": 1,
			    "description": "Get out of bed",
			    "deadline": "2017-09-11",
			    "done": true
			  },
			  {
			    "id": 2,
			    "description": "Brush teeth",
			    "deadline": "2017-09-10",
			    "done": false
			  },
			  {
			    "id": 3,
			    "description": "Eat breakfast",
			    "deadline": "2017-09-09",
			    "done": false
			  }
			]
		};
		this.counter = 4;
		this.onCBClickHandler = this.onCBClickHandler.bind(this);    
  	}

  	onCBClickHandler(oid) {
		let newTodos = [];
		this.state.todos.map ((obj) => {
			if (obj.id === oid){
				obj.done = !obj.done;
			}
			newTodos.push(obj);
			return 0;
		});
		this.setState({todos: newTodos});
	}

	render() {
		return (
			<div>
				<h1>Todo List</h1>
				<ul>
					{
						this.state.todos < 1 
						? <p>No items...</p>
						: this.state.todos.map((obj) => {
							return <Todo obj={obj} onCBClickHandler={this.onCBClickHandler} />
							/*
							return <li key={obj.id} onClick={this.onCBClickHandler.bind(this, obj.id)}>
							<Checkbox complete={obj.done}/> 
							{obj.description}, {obj.deadline}
							</li>
							*/
						})				
					}
				</ul>
			</div>
		);
	}
}

export default Todolist;