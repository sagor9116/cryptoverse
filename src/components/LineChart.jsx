import React from "react";
import { Chart as ChartJS } from "chart.js/auto";

import { Line } from "react-chartjs-2";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

const LineChart = ({ coinHistoryData, coinName, coinPrice }) => {
	const coinPriceHistory = coinHistoryData?.data?.history.map(
		(price) => price?.price
	);

	const coinTimeStampHistory = coinHistoryData?.data?.history.map((time) =>
		new Date(time?.timestamp).toLocaleDateString()
	);

	console.log(coinHistoryData?.data?.history.map((price) => price.price));

	console.log(
		coinHistoryData?.data?.history.map((date) =>
			new Date(date.timestamp).toLocaleDateString()
		)
	);

	// const coinPriceHistory = [];
	// const coinTimeStampHistory = [];

	// for (let i = 0; i < coinHistoryData?.data?.history?.length; i += 1) {
	// 	coinPriceHistory.push(coinHistoryData?.data?.history[i].price);
	// }

	// console.log(coinPriceHistory);

	// for (let i = 0; i < coinHistoryData?.data?.history?.length; i += 1) {
	// 	coinTimeStampHistory.push(
	// 		new Date(
	// 			coinHistoryData?.data?.history[i].timestamp
	// 		).toLocaleDateString()
	// 	);
	// }

	// console.log(coinTimeStampHistory);

	const data = {
		labels: coinTimeStampHistory,
		datasets: [
			{
				label: "Price In USD",
				data: coinPriceHistory,
				fill: false,
				backgroundColor: "#0071bd",
				borderColor: "#0071bd",
			},
		],
	};

	const options = {
		scales: {
			yAxes: [
				{
					beginAtZero: true,
					ticks: {
						max: 10000000,
						min: 0,
					},
				},
			],
		},
	};

	return (
		<>
			<Row className="chart-header">
				<Title className="chart-title"> {coinName} Price Chart</Title>
				<Col className="price-container">
					<Title level={5} className="price-change">
						Price Change : {coinHistoryData?.data?.change}
					</Title>
					<Title level={5} className="current-price">
						Current {coinName} Price: $ {coinPrice}
					</Title>
				</Col>
			</Row>
			<Line data={data} options={options} />
		</>
	);
};

export default LineChart;
