import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

const SectionWrapper = styled.section`
	background: #33b5e5;
	position: absolute;
	width: 100%;
	bottom: 0;
	left: 0;
	/* height: 100%; */

`;



class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				<SectionWrapper>
                    <h4>Footer</h4>
					{/* INSERIR CARDS */}
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
export default connect(mapStateToProps)(Footer);
