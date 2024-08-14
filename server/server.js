const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors());
app.use(express.json())

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
})
.then(() => console.log("DB CONNECTED"))
.catch(err => console.log("ERROR " + err));


const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

