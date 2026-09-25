use('library_management');

['authors','books','members','loans','reservations'].forEach(c => {
  if (!db.getCollectionNames().includes(c)) db.createCollection(c);
});

printjson(db.getCollectionNames());
