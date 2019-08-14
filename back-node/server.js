const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const API_PORT = 3001;

app.get('/api/hello',(req,res)=>{res.send({fromGet:" Coming from GET api"})});

app.post('/api/world',(req, res) => {
    console.log(req.body);
    res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
  });

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));