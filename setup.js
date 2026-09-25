use('library_management');

const collections = ['authors', 'books', 'members', 'loans', 'reservations'];

collections.forEach(name => {
  if (!db.getCollectionNames().includes(name)) {
    db.createCollection(name);
  }
});

print('Database and collections ready.');
printjson(db.getCollectionNames());
