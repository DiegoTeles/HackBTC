import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
// import ToggleDisplay from 'react-toggle-display';

/* Components */
import NavBar from '../../_components/NavBar';

import perfilImg from '../../_assets/img/func.jpg';
import PostContainer from '../PostContainer'
import EventAtendee from '../EventAtendee';

const SectionWrapper = styled.section`
	/* border: 4px solid red; */
	padding: 30px;
	justify-content: center;
	text-align: center;
	align-content: center;
    margin: 140px 0 70px 0;

`;

const IMGWrapper = styled.img`
	width: 180px;
	height: 180px;
	-webkit-box-shadow: -8px 9px 19px -16px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: -8px 9px 19px -16px rgba(0, 0, 0, 0.75);
	box-shadow: -8px 9px 19px -16px rgba(0, 0, 0, 0.75);
    border-radius: 50%;
`;

const H4Wrapper = styled.h4`
	margin-top: 20px;
	font-weight: bold;
`;

const H3Wrapper = styled.h3`
	font-size: 12px;
	line-height: 2px;
	color: gray;
	font-weight: 400;
`;

const H2Wrapper = styled.h2`
	font-size: 19px;
	/* line-height: 2px; */
	color: green;
	font-weight: bold;
    margin-bottom: 50px;
`;
const ContainerWrapper = styled.section`
    display: flex;
    /* justify-content: space-around; */
`;

class ShowContent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showCard_1: true,
			showCard_2: false,
			showCard_3: false,
			sugestion: null,
		};

		this.active = 'eventResult';
	}

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			// const res = this.props.eventList;
			const { sugestion } = this.props;
			const totalSusg = sugestion.length *10
			this.setState({
				...this.state,
				sugestion: sugestion,
				totalSusg: totalSusg
			});
		}
	}

	handleClick(type, evt) {
		evt.preventDefault();

		switch (type) {
			case 'valueAvaliable':
				this.active = 'valueAvaliable';
				break;
			case 'futureValue':
				this.active = 'futureValue';
				break;
			default:
				this.active = 'eventResult';
		}

		this.setState({
			...this.state,
			showCard_1: type === 'eventResult' ? true : false,
			showCard_2: type === 'valueAvaliable' ? true : false,
			showCard_3: type === 'futureValue' ? true : false,
		});
	}

	render() {
		
		const { sugestion, totalSusg } = this.state;
		return (
			<React.Fragment>
                <NavBar />					
				<SectionWrapper>
					<IMGWrapper src={perfilImg} alt='' />
					<H4Wrapper>Diego Telles</H4Wrapper>
					<H3Wrapper>CFO Execute Service</H3Wrapper>
					<H2Wrapper>{totalSusg} CTPoints</H2Wrapper>
                    <ContainerWrapper>
                    <PostContainer />
                    <EventAtendee />
                    </ContainerWrapper>

					{/* <Footer /> */}
				</SectionWrapper>				
			</React.Fragment>
		);
	}
}

/* Map State to Props/Childrens */
function mapStateToProps(state) {
	const { sugestion } = state.event;
	let data = {
		sugestion:  sugestion,
	};
	
	return data;
}

// the way to connect a component to redux is
// to return its connected proxy
export default connect(mapStateToProps)(ShowContent);
