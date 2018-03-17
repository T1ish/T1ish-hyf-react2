import React from "react";
import Todo from "./Todo";
import Checkbox from "./Checkbox";


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
		this.onClickHandler = this.onClickHandler.bind(this);
		//this.onCBClickHandler = this.onCBClickHandler.bind(this);
    
  	}

  	onClickHandler() {
		//console.log("I have been licked!");
		const newObject = 
		{
			 "id": this.counter++,
			 "description": "Go to sleep breakfast",
			 "deadline": "2018-09-09",
			 "done": false
		};
		const todos = this.state.todos;
		const newTodos = [...todos, newObject];
		this.setState({todos: newTodos});
	}

  	onCBClickHandler(oid) {
	  	//console.log("I have been ticked!");
		//console.log(od);
		let newTodos = [];
		this.state.todos.map ((obj) => {
			if (obj.id === oid){
				obj.done = !obj.done;
			}
			newTodos.push(obj);
			return 0;
		});
		this.setState({todos: newTodos});
		//console.log(this.state.todos);
	}

	render() {
		return (
			<div>
				<h1>Todo List</h1>
				<button onClick={this.onClickHandler}>Add object test</button>
				<ul>
					{
						this.state.todos.map((obj) => {
							//console.log(obj.id, obj.description, obj.deadline, obj.done);
							//return <Todo id={obj.id} item={obj.description} date={obj.deadline}/>
							return <li key={obj.id} onClick={this.onCBClickHandler.bind(this, obj.id)}>
								<Checkbox complete={obj.done}/> 
								{obj.description}, {obj.deadline}
							</li>
						})
					}
				</ul>
			</div>
		);
	}

}

export default Todolist;