import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

const SectionWrapper = styled.section`
	background: #f9f8f8;
	text-align: center;
    width: 55%;

    h4{
        text-align: left;
    }
`;

const H3Wrapper = styled.h3`
    /* float: left; */
`;

const H4Wrapper = styled.h4`
    /* float: right; */
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
                    <h4>Sugestões</h4>
					<textarea name="" id="" cols="70" placeholder="Deixe aqui uma sugestão..." rows="7"></textarea>

                    <h4>Publicaçoes antigas</h4>
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
