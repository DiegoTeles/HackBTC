import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import CardEvent from '../CardEvent';

import { eventActions } from '../../_actions';

const SectionWrapper = styled.section`
	margin-left: 30px;
	.eventos{
		  text-align: left;
		  margin-bottom: 20px;
	  }
	.event-container {
		background: #f9f8f8;
	  padding: 30px;
	}
`;

class EventAtendee extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			event: null,
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			// const res = this.props.eventList;
			const { sugestion, event } = this.props;
			this.setState({
				...this.state,
				event: event,
			});
		}
	}

	componentDidMount() {
		this.getEvent();
	}
	getEvent() {
		const { dispatch } = this.props;
		dispatch(eventActions.event());
	}

	render() {
		const { event } = this.state;
		return (
			<React.Fragment>
				<SectionWrapper>
					<h4 className="eventos">
						<i className='far fa-calendar-alt' /> Eventos
					</h4>
					<section className='event-container'>
						{event &&
							event.map((item, index) => {
								return (
									<CardEvent key={index}
										className='card card__repass'
										evento={item.atoms.event_name}
										name='Diego'
										data='10/06/19'
									/>
								);
							})}
					</section>
				</SectionWrapper>
			</React.Fragment>
		);
	}
}

/* Map State to Props/Childrens */
function mapStateToProps(state) {
	const { event } = state;

	let data = {
		event: event.event,
	};

	return data;
}

// the way to connect a component to redux is
// to return its connected proxy
export default connect(mapStateToProps)(EventAtendee);
