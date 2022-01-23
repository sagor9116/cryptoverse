import React from "react";
import millify from "millify";
import { Col, Row, Statistic, Typography } from "antd";

const { Title } = Typography;

const HomePage = () => {
	return (
		<>
			<Title level={2} className="heading">
				Get Crypto Statistics
			</Title>
			<Row>
				<Col span={12}>
					<Statistic title="Total Cryptocurrencies" value="4" />
				</Col>
				<Col span={12}>
					<Statistic title="Total Exchanges" value="4" />
				</Col>
				<Col span={12}>
					<Statistic title="Total Market Cap" value="4" />
				</Col>
				<Col span={12}>
					<Statistic title="Total 24h Volumn" value="4" />
				</Col>
				<Col span={12}>
					<Statistic title="Total Markets" value="4" />
				</Col>
			</Row>
		</>
	);
};

export default HomePage;
