const express = require('express');
const app = express();
// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default Heroku port
app.listen(8080);
app.get('*', function(req, res) {
    if (res.status(500)) {
        console.log('Invalid path: ' + req.path);
        res.redirect('/');
    } else {
        res.sendFile(path.join(__dirname + 'dist/index.html'));
    }
});
