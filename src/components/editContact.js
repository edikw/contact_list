import React, { Component } from 'react';
import '../App.css';
import Icon from '../assets/add-friend.png';

class EditContact extends Component {
	constructor () {
		super()
		this.state = {
			file: ''
		}
	}
	upload () {
		this.refs.fileUpload.click();
	}
	handleImage (value) {
		let file = value.target.files[0];
		this.setState({file: URL.createObjectURL(file)});
	}

	reset() {
		this.setState({file: ''});
	}

	render () {
		return (
			<div className="modal fade" id="modalFile" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" onClick={() => this.reset()}>
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalCenterTitle">Detail Contact</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.reset()}>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="detail_img">
								<input type="file" className="choose_input" ref="fileUpload"  onChange={(e)=> this.handleImage(e)}/>
								{this.state.file ?
									<div className="detail_preview">
										<img src={this.state.file} className="img_preview" onClick={() => this.upload()} alt=""/>
									</div>
									:
									<img src={Icon} className="img_thumbnail" onClick={() => this.upload()} alt=""/>
								}
							</div>
							<div className="detail_edit">
								<h6>Name : {this.props.modal.name}</h6>
							</div>
							<div className="detail_edit">
								<h6>Phone : {this.props.modal.phone}</h6>
							</div>
							<div className="detail_edit">
								<h6>Address : {this.props.address.city}</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default EditContact;