import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { MDBBtn } from 'mdbreact';

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

	textarea {
		padding: 5px 0 0 10px;
	}
	.button-send {
		margin-top: 20px;
		width: 150px;
		border-radius: 80px;
		align-self: flex-end;
	}
`;
const PostContent = styled.div`
	padding-top: 30px;
	margin-bottom: 30px;
	background: #f9f8f8;
	text-align: center;
	height: 300px;
`;

class PostContainer extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
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

	render() {
		const { sugestion } = this.state;
		return (
			<React.Fragment>
				<SectionWrapper>
					<h4>
						<i className='far fa-edit' /> Sugestões
					</h4>
					<TextAreaWrapper>
						<textarea name='' id='' cols='70' placeholder='Deixe aqui uma sugestão...' rows='7' />

						<Fragment>
							<MDBBtn className='button-send' color='info'>
								Enviar
							</MDBBtn>
						</Fragment>
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
