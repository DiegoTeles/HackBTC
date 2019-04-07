import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { MDBBtn } from 'mdbreact';
import axios from 'axios';

import CardPost from '../CardPost';

import { eventActions } from '../../_actions';

const SectionWrapper = styled.section`
	/* background: #f9f8f8; */
	text-align: center;
	width: 55%;
	height: 250px;
	/* margin-bottom: 300px; */

	h4 {
		text-align: left;
	}

	.text-pub {
		margin-right: auto;
		margin: 20px;
	}
`;

const TextAreaWrapper = styled.div`
	background: #f9f8f8;
	padding: 30px;
	margin: 20px 0 10px 0;
	text-align: center;
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
	textarea {
		padding: 10px;
		max-width: 450px;
	}
	.button-send {
		margin-top: 20px;
		width: 150px;
		border-radius: 80px;
		align-self: flex-end;
	}

`;
const PostContent = styled.div`
	padding: 30px;
	background: #f9f8f8;
	text-align: center;
	height: 300px;
`;

class PostContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sugestion: null,
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			// const res = this.props.eventList;
			const { sugestion } = this.props;
			this.setState({
				...this.state,
				sugestion: sugestion,
				susg: '',
				id: 'SieV9jMVEs',
				tag1: 'Cais retaguarda gate',
				tag2: 'Desperdicio de tempo'
			});
		}
	}

	componentDidMount() {
		this.getSugestion();
	}
	getSugestion() {
		const { dispatch } = this.props;
		dispatch(eventActions.sugestion());
	}

	handleChange = event => {
		this.setState({ susg: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();

		const texto = {
			susg: this.state.susg,
			id: this.state.id,
			tag1: this.state.tag1,
			tag2: this.state.tag2,
		};

		axios.post(`https://playground.concore.io/sugestion`, { texto }).then(res => {

		});
	};

	render() {
		const { sugestion } = this.state;
		return (
			<React.Fragment>
				<SectionWrapper>
					<h4>
						<i className='far fa-edit' /> Novas Idéias
					</h4>
					<TextAreaWrapper>
						<form onSubmit={this.handleSubmit}>
							<textarea
								name=''
								id=''
								name='susg'
								onChange={this.handleChange}
								cols='70'
								placeholder='Deixe aqui suas idéias...'
								rows='7'
								required
							/>

							<Fragment>
								<MDBBtn type='submit' className='button-send' color='info'>
									Enviar
								</MDBBtn>
							</Fragment>
						</form>
					</TextAreaWrapper>
					<h4 className='text-pub'>
						<i className='fas fa-clipboard-list' /> Publicaçoes antigas
					</h4>
					<PostContent>
						{sugestion &&
							sugestion.map((item, index) => {
								return (
									<CardPost
										key={index}
										className='card card__repass'
										post={item.atoms.sugestion}
										namePost={item.atoms.user_hack.user}
										datePost='02/03/2019'
										tag='operacional'
									/>
								);
							})}
					</PostContent>
				</SectionWrapper>
			</React.Fragment>
		);
	}
}

/* Map State to Props/Childrens */
function mapStateToProps(state) {
	const { sugestion } = state.event;

	let data = {
		sugestion: sugestion,
	};

	// return data;

	return data;
}

// the way to connect a component to redux is
// to return its connected proxy
export default connect(mapStateToProps)(PostContainer);
