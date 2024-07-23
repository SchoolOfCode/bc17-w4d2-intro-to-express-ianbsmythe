//use npm init to initialize the repo as a Node project - Y
//Go to http://expressjs.com/en/starter/installing.html and follow the instructions to install Express in your Node project. - Y
// Create an index.js file - Y
// start script in your package.json that uses Node to run index.js. - Y
// Update package.json to use ES Modules: Add "type": "module" to package.json file. This tells Node.js to treat .js files as ES modules.
// Convert require to import: Change the require statements to import statements in JavaScript file.
// Start the server: Ensure Node.js installed and use the command node your-file-name.js to start the server.
//


import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log('GET / request received');
    res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})