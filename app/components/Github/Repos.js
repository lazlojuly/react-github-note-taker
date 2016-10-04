var React = require('React')

var Repos = React.createClass({
	render: function() {
		return (
			<div>
				<p> REPOS </p>
				REPOS: {this.props.repos}
			</div>
		)
	}
})

module.exports = Repos
