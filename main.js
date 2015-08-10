'use strict';

var RESULTS = ["James Bond", "Superman", "Jason Bourne", "Terminator"];

var SearchApp = React.createClass({
	render: function(){
		return (
			<div>
			{this.props.results}
			</div>
		);
	}
});



React.render(<SearchApp results={RESULTS}/>,  document.getElementById("content"));
