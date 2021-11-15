// 1. To create a database
// use animalShelter

// 2. To check which database you are working on?
// db 

// 3. To check all the databases
// show dbs

// 4. To insert onw row into database 
// db.dogs.insertOne({name: "Charlie"})

// 5. To check all collections 
// show collections 

// 6. To find everything from a collection
// db.dogs.find()

// 7. To find an item with a specific condition
// db.dogs.find({breed: "corgi"})

// 8. To update a collection 
// db.dogs.updateOne({name: "Charlie"}, {$set: {age: 4}})

// 9. To delete an item
// db.dogs.deleteOne({name: "Charlie"})

// To delete all items from a collection
// db.dogs.deleteMany()