const express = require('express');
const { MongoClient } = require('mongodb');
const os = require('os');

const app = express();
const PORT = 3000;

// قراءة رابط قاعدة البيانات من متغيرات البيئة
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017';
const dbName = 'taskdb';
let db;

MongoClient.connect(dbUrl)
  .then(client => {
    console.log('Connected to Database');
    db = client.db(dbName);
  })
  .catch(error => console.error(error));

app.get('/', (req, res) => {
  res.json({ app: 'CISC 886 Lab 8', host: os.hostname() });
});

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await db.collection('tasks').find().toArray();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});