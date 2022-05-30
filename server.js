const app = require('./src/app');

/**
 * Server Initiation
 */
app.listen(app.get('port'), () => {
    console.log(`Service is listening to the port ${app.get('port')}.`);
});