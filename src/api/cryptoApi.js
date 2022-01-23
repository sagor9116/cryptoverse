import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

var options = {
	method: "GET",
	url: "https://coinranking1.p.rapidapi.com/coins",
	params: {
		referenceCurrencyUuid: "yhjMzLPhuIDl",
		timePeriod: "24h",
		tiers: "1",
		orderBy: "marketCap",
		orderDirection: "desc",
		limit: "50",
		offset: "0",
	},
	headers: {
		"x-rapidapi-host": "coinranking1.p.rapidapi.com",
		"x-rapidapi-key": "b614a68707msha2b052a4a41205dp182147jsn486bd19dcb12",
	},
};
