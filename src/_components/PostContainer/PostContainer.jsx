import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { MDBBtn } from 'mdbreact';

import CardPost from '../CardPost';
const SectionWrapper = styled.section`
	/* background: #f9f8f8; */
	text-align: center;
	width: 55%;
	height: 250px;
	/* margin-bottom: 300px; */

	h4 {
		text-align: left;
	}

	.text-pub{
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
 padding: 30px;
	background: #f9f8f8;
	text-align: center;
	height: 300px;
 `;

class PostContainer extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				<SectionWrapper>
					<h4><i class="far fa-edit"></i> Sugestões</h4>
                    <TextAreaWrapper>
					<textarea name='' id='' cols='70' placeholder='Deixe aqui uma sugestão...' rows='7' />

					<Fragment>
						<MDBBtn className='button-send' color='info'>Enviar</MDBBtn>
					</Fragment> 

                    </TextAreaWrapper>
					<h4 className="text-pub"><i class="fas fa-clipboard-list"></i> Publicaçoes antigas</h4>
					<PostContent>
					<CardPost
						className='card card__repass'
						post='Loren ypsun, nalari sun da masteraver irri Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, beatae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, voluptatibus.'
						namePost='Diego Telles'
						datePost ='02/03/2019'
					/>
					</PostContent>
				</SectionWrapper>
			</React.Fragment>
		);
	}
}

/* Map State to Props/Childrens */
function mapStateToProps(state) {
	const { event } = state;

	return {
		event: event,
	};
}

// the way to connect a component to redux is
// to return its connected proxy
export default connect(mapStateToProps)(PostContainer);
