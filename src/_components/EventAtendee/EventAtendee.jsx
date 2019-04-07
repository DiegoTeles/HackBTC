import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import CardEvent from '../CardEvent';

const SectionWrapper = styled.section`

.event-container {
	background: #f9f8f8;
	text-align: center;
  width: 90%;
  padding: 30px;
  margin-left: auto;
}
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

	        <h4><i class="far fa-calendar-alt"></i> EVENTOS</h4>
	        <section className="event-container">
						<CardEvent
	              className='card card__repass'
	              evento='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ex at vitae quia, tempore quam.'
	              name='Diego'
	              data="10/06/19"
	          />
	        </section>
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
