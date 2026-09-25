
use('library_management');

db.books.insertOne({
  _id:'B041',
  isbn:'9781234567890',
  title:'Fundamentals of Database Management',
  author_id:'A006',
  category:'Database',
  publisher:'Academic Press',
  year:2024,
  copies:{total:5,available:5}
});

db.books.find(
  {category:'Database'},
  {_id:1,title:1,author_id:1,category:1}
);

db.members.findOne({_id:'M001'});


db.members.updateOne(
  {_id:'M001'},
  {$set:{phone:'9999999999'}}
);

db.books.updateOne(
  {_id:'B041'},
  {$inc:{'copies.available':-1}}
);


db.members.insertOne({
  _id:'M999',
  name:'Test Member',
  department:'Test',
  email:'test@example.com',
  phone:'9000000000',
  membership_type:'Student',
  active:true
});

db.members.deleteOne({_id:'M999'});

print('CRUD operations completed.');
