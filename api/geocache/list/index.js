const app = require('/Users/josephtang/mblapp/Geocache/server/util/configureApi.js');

app.post('*', (req, res) => {
    res.status(200).json({
        result: {},
    });
});

module.exports = app;