
use('library_management');

const session = db.getMongo().startSession();
const library = session.getDatabase('library_management');

try {
  session.startTransaction();

  const book = library.books.findOne({
    _id:'B041',
    'copies.available':{$gt:0}
  });

  if (!book) {
    throw new Error('Book is unavailable.');
  }

  library.loans.insertOne({
    _id:'L021',
    book_id:'B041',
    member_id:'M001',
    issue_date:new Date(),
    due_date:new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    return_date:null,
    status:'Issued',
    fine:0
  });

  library.books.updateOne(
    {_id:'B041','copies.available':{$gt:0}},
    {$inc:{'copies.available':-1}}
  );

  session.commitTransaction();
  print('Transaction committed successfully.');
} catch (e) {
  session.abortTransaction();
  print('Transaction aborted: ' + e);
} finally {
  session.endSession();
}


db.loans.findOne({_id:'L021'});
db.books.findOne({_id:'B041'},{_id:1,title:1,copies:1});
