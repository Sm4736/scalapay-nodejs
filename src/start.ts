/**
 * This is a simple boot of the application that works on port 3000.
 * After compilation with "npx tsc" this file can be used to run the application with "node start.js"
 */
const app = require('./index');

app.listen(3000, () => {
    return console.log('Running on port 3000')
});
