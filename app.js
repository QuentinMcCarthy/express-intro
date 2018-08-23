const express = require("express");
const app = express();

app.use(function(req,res,next){
	console.log(`${req.method} request for ${req.url}`);
	next();
});

// app.get(`/`, (req, res) => res.send(`Hello World!`));
app.get(`/`, function(req,res){
	res.sendFile(`${__dirname}/public/index.html`);
});

// app.post();

app.set(`port`, (process.env.PORT || 3000));

app.listen(app.get(`port`), function(){
	console.log(`Server is running on port ${app.get(`port`)}`);
});
