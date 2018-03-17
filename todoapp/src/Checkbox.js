import React from "react";

class Checkbox extends React.Component {

	onClickHandler() {
		console.log("I have been clicked!");
	}

	render() {
		return (
			<span onClick={this.onClickHandler}>[ ]</span>

			);
	}
}

export default Checkbox;