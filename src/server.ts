import express = require('express');

const app = express();

app.get('/', (request, response) => {
    
    return response.send('Olá');
});

app.post('/test-post', (request, response) => {

  return response.send('POST');
    
});


app.listen(3000, () => console.log("Server is running NLW") );
