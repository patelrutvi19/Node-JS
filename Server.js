const express = require('express');
const {ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors()); // Use CORS middleware
app.use(express.json()); // Parse JSON bodies

// Import routes
const srouter = require('./routes/student.route');

// Connection URI
const uri = "mongodb+srv://milanmca111:Bx580EwcBXPPHVXT@nodejs.7vfdn.mongodb.net/milan";
// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Use routes
app.use("/api", srouter);

// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 3000");
});
