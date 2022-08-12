const express = require('express')
const db = require("./models");

const app = express()
const port = 3000

app.use(express.json());
app.set('view engine', 'ejs')
app.set('views', './views')

db.sequelize.sync({ force: true })
.then(() => {
  console.log("Synced db.");
})
.catch((err) => {
  console.log("Failed to sync db: " + err.message);
});

app.get('/', function(req, res) {
  res.render('home')
});

require("./routers/turorial.routes")(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})