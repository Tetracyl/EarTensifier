/* eslint-disable no-unused-vars */
const { post } = require('../../tokens.json');
const fetch = require('node-fetch');

module.exports = async (client, servers) => {
	// fetch(`https://www.cloudlist.xyz/api/stats/${client.user.id}`, {
	// 	method: 'POST',
	// 	headers: {
	// 		'Authorization': post['cloudListXYZ']['token'],
	// 		'Content-Type': 'application/json',
	// 	},
	// 	body: JSON.stringify({ count: servers }),
	// })
	// 	.then(res => res.json())
	// 	.then(async () => {
	// 		client.log('Posted bot stats to cloudlist.xyz');
	// 	});
};