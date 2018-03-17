import React from "react";

class Checkbox extends React.Component {

/*	onClickHandler() {
		console.log("I have been clicked!");
	}
*/
	render() {
		const isCompleted = this.props.complete;
		return (
			<span /*onClick={this.onClickHandler}*/>
			{
				isCompleted?'[Y]':'[N]'
			}
			</span>

			);
	}
}

export default Checkbox;