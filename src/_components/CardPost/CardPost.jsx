import React from 'react';
import styled from '@emotion/styled';

const ContainerWrapper = styled.div`
	width: 80%;
	justify-content: center;
	align-content: center;
	margin-left: 10%;
	padding-bottom: 20px;
	h4 {
		font-size: 15px;
		font-weight: 300;
		padding: 0 30px 0 30px;
		margin-top: 16px;
		margin-bottom: 4px;
	}
	h3 {
		padding: 0 30px 0 0;
		font-size: 15px;
		font-weight: bold;
		text-align: right;
		margin-top: 16px;
		/* margin-bottom: 4px; */
	}
	h5 {
		padding: 0 30px 0 10px;
		margin: 0 10px 0 10px;
		font-size: 12px;
		/* font-weight: bold; */
		color: gray;
		text-align: right;
		margin-bottom: 4px;
	}
`;

export default props => (
	<ContainerWrapper
		onClick={props.click}
		className={props.className}
		marginRight={props.marginRight}>
		<h4>{props.post}</h4>
		<h3>{props.namePost}</h3>
		<h5>{props.datePost}</h5>
	</ContainerWrapper>
);
