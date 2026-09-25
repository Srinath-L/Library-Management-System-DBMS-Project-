use('library_management');

db.books.aggregate([
  {$group:{_id:'$category',total_books:{$sum:1}}},
  {$sort:{total_books:-1}}
]);

db.loans.aggregate([
  {$group:{_id:'$book_id',times_borrowed:{$sum:1}}},
  {$lookup:{from:'books',localField:'_id',foreignField:'_id',as:'book'}},
  {$unwind:'$book'},
  {$project:{_id:0,book_id:'$_id',title:'$book.title',times_borrowed:1}},
  {$sort:{times_borrowed:-1}}
]);

db.loans.aggregate([
  {$group:{_id:'$member_id',books_borrowed:{$sum:1}}},
  {$lookup:{from:'members',localField:'_id',foreignField:'_id',as:'member'}},
  {$unwind:'$member'},
  {$project:{_id:0,member_id:'$_id',member_name:'$member.name',books_borrowed:1}},
  {$sort:{books_borrowed:-1}}
]);

db.loans.aggregate([
  {$group:{_id:null,total_fine:{$sum:'$fine'}}}
]);

db.loans.aggregate([
  {$match:{status:'Issued'}},
  {$lookup:{from:'books',localField:'book_id',foreignField:'_id',as:'book'}},
  {$lookup:{from:'members',localField:'member_id',foreignField:'_id',as:'member'}},
  {$unwind:'$book'}, {$unwind:'$member'},
  {$project:{_id:0,loan_id:'$_id',book_title:'$book.title',member_name:'$member.name',issue_date:1,due_date:1}},
  {$sort:{due_date:1}}
]);

db.books.createIndex({isbn:1});
db.books.createIndex({title:1});
printjson(db.books.getIndexes());
