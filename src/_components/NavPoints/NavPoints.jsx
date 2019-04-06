import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

const SectionWrapper = styled.section`
	background: red;
	text-align: left;
    width: 50%;
`;

const H3Wrapper = styled.h3`
    float: left;
`;

const H4Wrapper = styled.h4`
    float: right;
`;

class NavPoints extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				<SectionWrapper>
					<div>
						<H3Wrapper>Ois</H3Wrapper>
					</div>
					<div>
						<H4Wrapper>Ois</H4Wrapper>
					</div>
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
export default connect(mapStateToProps)(NavPoints);
