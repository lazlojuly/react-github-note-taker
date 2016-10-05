import React from 'react'

class AddNote extends React.Component {
	handleSubmit() {
		const newNote = this.note.value
		this.note.value = ''
		this.props.addNote(newNote)
	}
	setRef(ref) {
		this.note = ref
	}
	render() {
		return (
			<div className="input-group">
				<form onSubmit={() => this.handleSubmit()} >
					<input type="text" className="form-control" placeholder="Add New Note"
						ref={(ref) => this.setRef(ref)} />
					<span className="input-group-btn">
						<button className="btn btn-default" type="submit">
							Submit
						</button>
					</span>
				</form>
			</div>
		)
	}
}

AddNote.propTypes = {
	username: React.PropTypes.string.isRequired,
	addNote: React.PropTypes.func.isRequired,
}


export default AddNote
