
const app = require('../../util/configureApi');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.put('*', (req, res) => {
    res.status(200).json({
        result: {},
    });
});

module.exports = app;