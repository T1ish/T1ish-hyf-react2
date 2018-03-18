import React from "react";

class Checkbox extends React.Component {

	render() {
		const isCompleted = this.props.complete;
		return (
			<span onClick={this.props.onCBClickHandler}>
			{
				isCompleted?'[Y]':'[N]'
			}
			</span>

			);
	}
}

export default Checkbox;