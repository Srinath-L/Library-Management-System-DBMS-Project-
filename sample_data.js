
use('library_management');

db.authors.insertMany([
  {_id:'A001',name:'Abraham Silberschatz',country:'USA'},
  {_id:'A002',name:'Thomas H. Cormen',country:'USA'},
  {_id:'A003',name:'Andrew S. Tanenbaum',country:'Netherlands'},
  {_id:'A004',name:'James F. Kurose',country:'USA'},
  {_id:'A005',name:'Ian Sommerville',country:'UK'},
  {_id:'A006',name:'Author 6',country:'India'},
  {_id:'A007',name:'Author 7',country:'USA'},
  {_id:'A008',name:'Author 8',country:'India'},
  {_id:'A009',name:'Author 9',country:'USA'},
  {_id:'A010',name:'Author 10',country:'India'},
  {_id:'A011',name:'Author 11',country:'USA'},
  {_id:'A012',name:'Author 12',country:'India'},
  {_id:'A013',name:'Author 13',country:'USA'},
  {_id:'A014',name:'Author 14',country:'India'},
  {_id:'A015',name:'Author 15',country:'USA'}
]);


db.books.insertMany([
  {_id:'B001',isbn:'9780135166307',title:'Database System Concepts',author_id:'A001',category:'Database',publisher:'McGraw Hill',year:2020,copies:{total:5,available:5}},
  {_id:'B002',isbn:'9780262033848',title:'Introduction to Algorithms',author_id:'A002',category:'Algorithms',publisher:'MIT Press',year:2022,copies:{total:4,available:4}},
  {_id:'B003',isbn:'9780000000003',title:'Computer Networks',author_id:'A003',category:'Networking',publisher:'Pearson',year:2019,copies:{total:6,available:6}},
  {_id:'B004',isbn:'9780000000004',title:'Computer Networking: A Top-Down Approach',author_id:'A004',category:'Networking',publisher:'Pearson',year:2021,copies:{total:5,available:5}},
  {_id:'B005',isbn:'9780000000005',title:'Software Engineering',author_id:'A005',category:'Software Engineering',publisher:'Pearson',year:2020,copies:{total:4,available:4}},
  {_id:'B006',isbn:'9780000000006',title:'Operating System Concepts',author_id:'A001',category:'Operating Systems',publisher:'Wiley',year:2018,copies:{total:5,available:5}},
  {_id:'B007',isbn:'9780000000007',title:'The C Programming Language',author_id:'A002',category:'Programming',publisher:'Prentice Hall',year:2017,copies:{total:3,available:3}},
  {_id:'B008',isbn:'9780000000008',title:'Clean Code',author_id:'A005',category:'Programming',publisher:'Prentice Hall',year:2018,copies:{total:4,available:4}},
  {_id:'B009',isbn:'9780000000009',title:'Artificial Intelligence: A Modern Approach',author_id:'A003',category:'AI',publisher:'Pearson',year:2021,copies:{total:3,available:3}},
  {_id:'B010',isbn:'9780000000010',title:'Programming with Java',author_id:'A004',category:'Programming',publisher:"O'Reilly Media",year:2022,copies:{total:4,available:4}}
]);

for (let i = 11; i <= 40; i++) {
  db.books.insertOne({
    _id: 'B' + String(i).padStart(3, '0'),
    isbn: '978000000' + String(i).padStart(4, '0'),
    title: 'Library Book ' + i,
    author_id: 'A' + String((i % 15) + 1).padStart(3, '0'),
    category: ['Database','Programming','Algorithms','Networking','Artificial Intelligence','Operating Systems'][i % 6],
    publisher: 'Academic Press',
    year: 2018 + (i % 7),
    copies: {total: 3 + (i % 4), available: 3 + (i % 4)}
  });
}


db.members.insertMany([
  {_id:'M001',name:'Rahul Sharma',department:'Computer Science',email:'rahul@example.com',phone:'9876543210',membership_type:'Student',active:true},
  {_id:'M002',name:'Ananya Rao',department:'Information Technology',email:'ananya@example.com',phone:'9876543211',membership_type:'Student',active:true},
  {_id:'M003',name:'Arjun Kumar',department:'Electronics',email:'arjun@example.com',phone:'9876543212',membership_type:'Student',active:true},
  {_id:'M004',name:'Priya Nair',department:'Data Science',email:'priya@example.com',phone:'9876543213',membership_type:'Student',active:true},
  {_id:'M005',name:'Vikram Singh',department:'Artificial Intelligence',email:'vikram@example.com',phone:'9876543214',membership_type:'Student',active:true},
  {_id:'M006',name:'Sneha Iyer',department:'Computer Science',email:'sneha@example.com',phone:'9876543215',membership_type:'Student',active:true},
  {_id:'M007',name:'Karthik R',department:'Information Technology',email:'karthik@example.com',phone:'9876543216',membership_type:'Student',active:true},
  {_id:'M008',name:'Meera Krishnan',department:'Electronics',email:'meera@example.com',phone:'9876543217',membership_type:'Student',active:true},
  {_id:'M009',name:'Aditya Verma',department:'Data Science',email:'aditya@example.com',phone:'9876543218',membership_type:'Student',active:true},
  {_id:'M010',name:'Divya Menon',department:'Artificial Intelligence',email:'divya@example.com',phone:'9876543219',membership_type:'Student',active:true}
]);

for (let i = 11; i <= 25; i++) {
  db.members.insertOne({
    _id:'M' + String(i).padStart(3,'0'),
    name:'Member ' + i,
    department:['Computer Science','Information Technology','Electronics','Data Science','Artificial Intelligence'][i % 5],
    email:'member' + i + '@example.com',
    phone:'900000' + String(i).padStart(4,'0'),
    membership_type:'Student',
    active:true
  });
}


db.loans.insertMany([
  {_id:'L001',book_id:'B001',member_id:'M001',issue_date:ISODate('2026-09-01'),due_date:ISODate('2026-09-15'),return_date:null,status:'Issued',fine:0},
  {_id:'L002',book_id:'B002',member_id:'M002',issue_date:ISODate('2026-09-02'),due_date:ISODate('2026-09-16'),return_date:null,status:'Issued',fine:0},
  {_id:'L003',book_id:'B003',member_id:'M003',issue_date:ISODate('2026-08-20'),due_date:ISODate('2026-09-03'),return_date:ISODate('2026-09-05'),status:'Returned',fine:20},
  {_id:'L004',book_id:'B004',member_id:'M004',issue_date:ISODate('2026-08-25'),due_date:ISODate('2026-09-08'),return_date:ISODate('2026-09-07'),status:'Returned',fine:0},
  {_id:'L005',book_id:'B005',member_id:'M005',issue_date:ISODate('2026-09-03'),due_date:ISODate('2026-09-17'),return_date:null,status:'Issued',fine:0},
  {_id:'L006',book_id:'B001',member_id:'M006',issue_date:ISODate('2026-08-10'),due_date:ISODate('2026-08-24'),return_date:ISODate('2026-08-26'),status:'Returned',fine:20},
  {_id:'L007',book_id:'B006',member_id:'M007',issue_date:ISODate('2026-09-04'),due_date:ISODate('2026-09-18'),return_date:null,status:'Issued',fine:0},
  {_id:'L008',book_id:'B007',member_id:'M008',issue_date:ISODate('2026-08-15'),due_date:ISODate('2026-08-29'),return_date:ISODate('2026-08-28'),status:'Returned',fine:0},
  {_id:'L009',book_id:'B008',member_id:'M009',issue_date:ISODate('2026-09-05'),due_date:ISODate('2026-09-19'),return_date:null,status:'Issued',fine:0},
  {_id:'L010',book_id:'B009',member_id:'M010',issue_date:ISODate('2026-08-18'),due_date:ISODate('2026-09-01'),return_date:ISODate('2026-09-03'),status:'Returned',fine:20}
]);

for (let i = 11; i <= 20; i++) {
  db.loans.insertOne({
    _id:'L' + String(i).padStart(3,'0'),
    book_id:'B' + String((i % 30) + 1).padStart(3,'0'),
    member_id:'M' + String((i % 20) + 1).padStart(3,'0'),
    issue_date:ISODate('2026-09-01'),
    due_date:ISODate('2026-09-15'),
    return_date:null,
    status:'Issued',
    fine:0
  });
}

db.reservations.insertMany([
  {_id:'R001',book_id:'B002',member_id:'M003',reservation_date:ISODate('2026-09-10'),status:'Active'},
  {_id:'R002',book_id:'B001',member_id:'M004',reservation_date:ISODate('2026-09-11'),status:'Active'},
  {_id:'R003',book_id:'B005',member_id:'M006',reservation_date:ISODate('2026-09-12'),status:'Active'},
  {_id:'R004',book_id:'B003',member_id:'M007',reservation_date:ISODate('2026-09-13'),status:'Completed'},
  {_id:'R005',book_id:'B008',member_id:'M009',reservation_date:ISODate('2026-09-14'),status:'Cancelled'}
]);

for (let i = 6; i <= 10; i++) {
  db.reservations.insertOne({
    _id:'R' + String(i).padStart(3,'0'),
    book_id:'B' + String((i % 20) + 1).padStart(3,'0'),
    member_id:'M' + String((i % 15) + 1).padStart(3,'0'),
    reservation_date:ISODate('2026-09-15'),
    status:'Active'
  });
}

print('Sample data loaded: 110 documents.');
