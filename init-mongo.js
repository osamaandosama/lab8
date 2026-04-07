db = db.getSiblingDB('taskdb');
db.tasks.insertMany([
  { id: 1, name: 'Milk', status: 'done' },
  { id: 2, name: 'Eggs', status: 'done' },
  { id: 3, name: 'Bread', status: 'pending' },
  { id: 7, name: 'Tea', status: 'pending' }
]);
