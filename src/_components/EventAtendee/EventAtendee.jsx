import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

const SectionWrapper = styled.section`
	background: #f9f8f8;
	text-align: center;
    width: 35%;
`;

const H3Wrapper = styled.h3`
    /* float: left; */
`;

const H4Wrapper = styled.h4`
    /* float: right; */
`;

class EventAtendee extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				<SectionWrapper>
                    <h4>Eventos</h4>
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
export default connect(mapStateToProps)(EventAtendee);
