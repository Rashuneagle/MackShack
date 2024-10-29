// seeds.js
const mongoose = require('mongoose');
const MailingList = require('../models/MailingList'); // Adjust the path if necessary

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mackshack', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => console.error('MongoDB connection error:', err));

// Sample mailing list data
const mailingListData = [
  {
    email: 'test1@example.com',
    preferences: 'promotions',
  },
  {
    email: 'test2@example.com',
    preferences: 'events',
  },
  {
    email: 'test3@example.com',
    preferences: 'new_menu_items',
  },
  {
    email: 'test4@example.com',
    preferences: 'all',
  },
];

// Function to seed the mailing list data
const seedMailingList = async () => {
  try {
    // Clear existing data in the MailingList collection
    await MailingList.deleteMany({});
    console.log('MailingList collection cleared');

    // Insert new data
    await MailingList.insertMany(mailingListData);
    console.log('MailingList seeded successfully');

    // Close the database connection
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding MailingList:', err);
    mongoose.connection.close();
  }
};

// Run the seed function
seedMailingList();