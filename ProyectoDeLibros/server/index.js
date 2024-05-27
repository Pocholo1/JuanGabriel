const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    let config = {
        method: 'GET',
        url: "https://api.jsonbin.io/v3/b/6654d650e41b4d34e4fa5b0a",
        headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
    }
    axios(config)
    .then(result => {
        res.send(result.data.record);
    });
});



const user = require("./controller/userController");
app.use("/registro-usuario", user.register);
// app.use("/login",user.login);


const PORT = 3001

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto' + PORT)
})