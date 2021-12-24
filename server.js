const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/public"));
}
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./Client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
});