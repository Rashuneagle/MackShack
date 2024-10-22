// Import Mongoose
const mongoose = require('mongoose');

// Create the MailingList schema
const mailingListSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (email) {
        // Simple regex for email validation
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: 'Please enter a valid email address.'
    }
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  },
  preferences: {
    type: String,
    enum: ['promotions', 'events', 'new_menu_items', 'all'],
    default: 'all'
  }
});

// Create the MailingList model
const MailingList = mongoose.model('MailingList', mailingListSchema);

// Export the model
module.exports = MailingList;
