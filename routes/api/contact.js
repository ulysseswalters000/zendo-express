const express = require('express');
const mongodb = require('mongodb');
const path = require('path');
const router = express.Router();

require('dotenv').config();

// Get Contact form submissions
// Route here refers to route specified in app.js
// Therefore route '/' will be '/contact'

// Get Contact entries
// router.get('/', async (req, res) => {
//   res.sendFile(path.resolve(__dirname + '../public/index.html'));
// });

// Add contact entry
router.post('/', async (req, res) => {
  try {
    const contacts = await loadZendoContacts();
    await contacts.insertOne({
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      message: req.body.message
    });
    res.redirect('/');
    } catch(err) {
      console.log(err);
    }
});

// Delete contact Entry
router.delete('/:id', async (req, res) => {
  const contacts = await loadZendoContacts();
  await contacts.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
  res.status(200);
});



// Connects to zendo-contacts
// using asynchronous function

async function loadZendoContacts() {
  const client = await mongodb.MongoClient.connect
  (process.env.PROD_MONGODB,
  {
    //this passed object will stop annoying warning
    useNewUrlParser: true
  }
);

  //initializes
  return client.db('zendo-contacts').collection('contact-posts');
}

module.exports = router;
