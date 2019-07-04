import React, { Component } from 'react';
import EditContact from './editContact';
import '../App.css';
import axios from 'axios';
import Icon from '../assets/search.png';

class ContactDetail extends Component {
	constructor () {
		super()
		this.state = {
			list_contact: [],
			data_modal: [],
			address: {}
		}
	}

	componentDidMount () {
		this.getData();
	}

	getData () {
		axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
			this.setState({list_contact: res.data});
		});
	}
	modalEdit (data) {
		this.setState({
			data_modal: data,
			address: data.address
		});
	}
	handleSearch (value) {
		let arr = [];
		let key = value.target.value;
		if(key.length > 0 ){
			for (var i = 0; i < this.state.list_contact.length; i++) {
				if(key.toLowerCase() === this.state.list_contact[i].name.toLowerCase() || this.state.list_contact[i].name.toLowerCase().indexOf(key.toLowerCase()) !== -1){
					arr.push(this.state.list_contact[i]);
					this.setState({list_contact: arr});

				}
			}
		}else if(key.length === 0){
			this.getData();
		}
	}
	render () {
		return (
			<div className="container_contact">
				<div className="wrapper_contact col-12 col-md-10 col-lg-6 mx-auto">
					<h4>Contact List</h4>
					<div className="contact_search">
						<img src={Icon} className="search_icon" alt="" />
						<input placeholder="search" onChange={this.handleSearch.bind(this)} />
					</div>
					<div className="list_contact">
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Phone Number</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{this.state.list_contact.map((contact, i) => {
									return (
										<tr key={i}>
											<td>{contact.name}</td>
											<td>{contact.phone}</td>
											<td>
												<div className="button_edit">
													<button type="button" data-toggle="modal" data-target="#modalFile" onClick={() => this.modalEdit(contact)} className="btn rounded-0 col-8 btn-info">Edit</button>
												</div>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
				<EditContact modal ={this.state.data_modal} address={this.state.address}/>
			</div>
		)
	}
}

export default ContactDetail;