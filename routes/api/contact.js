const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Contact form submissions
// Route here refers to route specified in app.js
// Therefore route '/' will be '/contacts'
router.get('/', (req, res) => {
  res.sendFile('../../public/contact.html');
});

// Connects to zendo-contacts
// using asynchronous function

async function loadZendoContacts() {
  const client = await mongodb.MongoClient.connect
  ('mongodb://andrew:Percuss1on!@ds157654.mlab.com:57654/zendo-contacts', {
    //this passed object will stop annoying warning
    useNewUrlParser: true
  });

  //initializes
  return client.db('zendo-contacts').collection('contact-posts');
}

module.exports = router;
