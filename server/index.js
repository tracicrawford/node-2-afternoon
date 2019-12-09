const express = require("express");
const app = express();
const mc = require('./controllers/messages_controllers');

app.use(express.json());
app.use(express.static('server' + '/../public/build'));


const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

const port = 3001;
app.listen(3001, () => console.log("Listening on Port 3001"));
