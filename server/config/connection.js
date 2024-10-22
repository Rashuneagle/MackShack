const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mackshack', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

// Get the default connection
const db = mongoose.connection;

// Handle MongoDB connection events
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('Failed to connect to MongoDB:', err);
});

// Handle disconnection event
db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// Gracefully close the connection on process termination
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed due to application termination');
  process.exit(0);
});

module.exports = db;  // Export the connection
