const models = require('../models'); // import models folder into this javascript file, which contains all the different collections for my project
const db = require('../config/connection'); //imports the connection folder which alllows the module to interact with the MongoDB database

module.exports = async (modelName, collectionName) => { // module.exports is exporting the arguments asynchronously which means it doesn' tfollder an order.
  try {
    let modelExists = await models[modelName].db.db.listCollections({ //Checks whether the collection exits in the database by passing the collectionName
      name: collectionName
    }).toArray()// Converts the result into an array of collections that matcch the given name

    if (modelExists.length) { // if collection exits
      await db.dropCollection(collectionName); //Drop the colection
      console.log(`${collectionName} collection dropped`)
    }
  } catch (err) {
    console.error(`Error dropping ${collectionName} collection: `, err);
    throw err;
  }
};
