import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
// import ToggleDisplay from 'react-toggle-display';

/* Components */
import NavBar from '../../_components/NavBar';

import perfilImg from '../../_assets/img/22.png';
import PostContainer from '../PostContainer'
import EventAtendee from '../EventAtendee';
import Footer from '../Footer'
import AdminBar from '../AdminBar';


// import NavPoints from '../NavPoints'
/* Placeholder */
// import ShowContentPlaceholder from './ShowContentPlaceholder';

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
	font-size: 16px;
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

		this.props = props;
		this.state = {
			showCard_1: true,
			showCard_2: false,
			showCard_3: false,
			repass: 0,
			repaymentSum: 0,
			antecipationSum: 0,
			totalAvaliable: 0,
			totalFuture: 0,
			totalValues: 0,
		};

		this.active = 'eventResult';

		this.calcRepayment = this.calcRepayment.bind(this);
		this.calcDeductions = this.calcDeductions.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			const { amounts, event, deductions, repayment } = this.props;

			if (event && deductions && amounts) {
				if (repayment.data !== 0) {
					this.calcRepayment(repayment.total_repayment, repayment.total_antecipation);
					return;
				}
				this.calcRepayment(0, 0);
			}
		}
	}

	calcDeductions() {
		const { deductions } = this.props;

		let deductionAmount = 0;
		if (deductions) {
			const { services, taxes } = deductions;

			if (services) {
				services.map(item => {
					deductionAmount += item.extra.deduction;
					return deductionAmount;
				});
			}

			if (taxes) {
				taxes.map(item => {
					deductionAmount += item.extra.deduction;
					return deductionAmount;
				});
			}
		}

		return deductionAmount;
	}

	calcRepayment(repaymentSum, antecipationSum) {
		const { amounts } = this.props;

		const deductions = this.calcDeductions();
		const totalValues = amounts.net_value - deductions;
		const totalAvaliable = amounts.avaliable_value - repaymentSum - deductions;
		const totalFuture = amounts.future - antecipationSum;

		this.setState({
			...this.state,
			totalValues: totalValues.toFixed(2),
			totalAvaliable: totalAvaliable.toFixed(2),
			totalFuture: totalFuture.toFixed(2),
		});
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
		const { totalValues, totalFuture, totalAvaliable } = this.state;
		const { amounts, event } = this.props;

		return (
			<React.Fragment>
                <NavBar />					
				<SectionWrapper>
					<IMGWrapper src={perfilImg} alt='' />
					<H4Wrapper>Diego Telles</H4Wrapper>
					<H3Wrapper>CFO Execute Service</H3Wrapper>
					<H2Wrapper>30 CTPoints</H2Wrapper>
					<AdminBar />													
					
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
	const { deductions, amount, repayment } = state.event;

	let data = {
		event: amount ? amount.event : null,
		amounts: amount ? amount.event.atoms.amounts : null,
		repayment,
		deductions,
	};

	return data;
}

// the way to connect a component to redux is
// to return its connected proxy
export default connect(mapStateToProps)(ShowContent);
