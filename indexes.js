
use('library_management');

db.books.createIndex({isbn:1});
db.books.createIndex({title:1});

print('Books indexes:');
printjson(db.books.getIndexes());
