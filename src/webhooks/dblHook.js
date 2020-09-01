const voteRewards = require('../utils/voting/voteRewards.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
app.use(bodyParser.json());

module.exports.startUp = async (client) => {
    app.listen(9836, function() {
        console.log(`[${new Date().toLocaleString()}] > [READY] DBL Hook Ready! Listening on: 9836`);
      });

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // eslint-disable-next-line no-unused-vars
    router.post('/discordbotlist', async (req, res) => {
        if(req.headers.authorization || req.headers.authorization != process.env.DBL_HOOK_PASSWORD) return res.sendStatus(403);
        console.log(req.body.id);
        const id = req.body.id;
		const user = await client.users.fetch(id);
        voteRewards(client, user);
        return res.sendStatus(200);
    });

    app.use('/discordbotlist', router);
};