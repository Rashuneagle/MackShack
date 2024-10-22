// schemas/resolvers.js
const MailingList = require('../models/MailingList'); // Import the MailingList model

const resolvers = {
  Query: {
    mailingList: async () => {
      try {
        // Fetch all subscribers from the mailing list
        return await MailingList.find();
      } catch (err) {
        throw new Error('Failed to fetch mailing list subscribers: ' + err.message);
      }
    },
  },
  Mutation: {
    subscribeToMailingList: async (_, { email, preferences }) => {
      try {
        const newSubscriber = new MailingList({
          email,
          preferences
        });
        await newSubscriber.save();
        return newSubscriber;
      } catch (err) {
        throw new Error('Failed to subscribe to the mailing list: ' + err.message);
      }
    },
  },
  
};

module.exports = resolvers;
