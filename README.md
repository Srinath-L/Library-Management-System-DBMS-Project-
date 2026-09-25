# Library Management System

## Database Systems Lab Project

A Library Management System developed as a group project for the Database Systems Lab. The project uses MongoDB as the NoSQL database to manage books, authors, library members, loans, and reservations.

## Project Overview

The system is designed to manage the core operations of a library through a MongoDB database. It demonstrates NoSQL database concepts including document-based data storage, CRUD operations, aggregation pipelines, indexing, and transactions.

The current implementation focuses on the database layer and core database functionalities.

## Technologies Used

- MongoDB
- MongoDB Shell (mongosh)
- JavaScript for MongoDB scripts

## Database Collections

The database contains five collections:

| Collection | Description |
|---|---|
| `authors` | Stores information about book authors |
| `books` | Stores book details, categories, publishers, and available copies |
| `members` | Stores library member information |
| `loans` | Stores book issue and return records |
| `reservations` | Stores book reservation records |

## Features Implemented

- MongoDB database and collection creation
- Sample data loading
- CRUD operations
  - Create
  - Read
  - Update
  - Delete
- Aggregation pipelines
- `$lookup` operations between collections
- Indexing
- MongoDB transactions
- Single-node replica set configuration for transaction support

## Sample Data

The database currently contains 112 documents across the five collections:

- 15 authors
- 41 books
- 25 members
- 21 loans
- 10 reservations

**Total: 112 documents**

## Project Structure

```text
library-management-mongodb/
│
├── README.md
│
├── database/
│   ├── setup.js
│   ├── sample_data.js
│   ├── crud.js
│   ├── aggregation.js
│   ├── indexes.js
│   └── transaction.js

```

## How to Run

### Prerequisites

Install:

- MongoDB Community Server
- MongoDB Shell (`mongosh`)

### Step 1: Start MongoDB

Make sure the MongoDB server is running.

### Step 2: Open MongoDB Shell

Open `mongosh`.

### Step 3: Select the Database

```javascript
use library_management
```

### Step 4: Run the Database Scripts

Run the scripts in the following order:

1. `setup.js`
2. `sample_data.js`
3. `crud.js`
4. `aggregation.js`
5. `indexes.js`
6. `transaction.js`

The transaction script requires MongoDB to run as a replica set.

## MongoDB Features Demonstrated

### CRUD Operations

The project demonstrates inserting, retrieving, updating, and deleting documents.

### Aggregation

Five aggregation pipelines are implemented for:

- Finding the number of books in each category
- Finding the most borrowed books
- Finding books borrowed by each member
- Calculating total fines
- Finding currently issued books

### Indexing

Indexes are created on:

- `isbn`
- `title`

in the `books` collection.

### Transactions

A MongoDB transaction is used when issuing a book. The transaction:

1. Creates a loan record.
2. Decreases the available number of copies.

Both operations are committed together.

## Project Team

This project was developed as a group project by:

| Name | Registration Number |
|---|---|
| L Srinath | 24BDS0265 |
| Sugash K | 24BCE2565 |


## Course Information

**Course:** Database Systems Lab (BCSE302L) 
**Project:** Library Management System  
**Academic Year:** 2026
