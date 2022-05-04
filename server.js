const express = require("express")
const app = express()
const moongoose = require('mongoose')
const PORT = process.env.PORT || 5000;
const path = require("path")
const conifg = require('config')
const db = conifg.get('mongoURL');
app.use(express.json());

app.use('/api/items', require("./routes/api/items"));
app.use('/api/users', require("./routes/api/users"));
app.use('/api/auth', require("./routes/api/auth"));


if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })

}

moongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('mongoose conected')).catch(err => {
        console.log(err);
    })


app.listen(PORT, () => {
})