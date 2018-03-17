import React from "react";
import Todo from "./Todo";
import Checkbox from "./Checkbox";

//const todos = [				["hello", 0], 				["hi", 1], 				["bye", 2],				["goodmorning", 3]			];

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

    
  	}

  	onClickHandler() {
		console.log("I have been clicked!");
	}

	render() {
		return (
			<div>
				<h1>Todo List</h1>
				<button onClick={this.onClickHandler}>trest</button>
				<ul>
					{

						this.state.todos.map((obj) => {
							console.log(obj.id, obj.description, obj.deadline, obj.done);
							//return <Todo id={obj.id} item={obj.description} date={obj.deadline}/>
							return <li key={obj.id}><Checkbox onClick={this.onClickHandler} />{obj.description}, {obj.deadline}</li>
						})
					}
				</ul>
			</div>
		);
	}

}

export default Todolist;