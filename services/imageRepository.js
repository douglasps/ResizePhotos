var MongoClient = require('mongodb').MongoClient;
var mongoUrl = "mongodb://localhost:27017/";

module.exports = {
    removeAll: function(callback){
        MongoClient.connect(mongoUrl, function(err, db){
            if (err) callback(err);
            var dbo = db.db("ResizePhotosChallenge");
            dbo.collection("images").drop();
        });
    },
    insertAll: function (images, callback) {
        MongoClient.connect(mongoUrl, function(err, db){
            if (err) callback(err);
            var dbo = db.db("ResizePhotosChallenge");
            dbo.collection("images").insertMany(images, function(err, res) {
                if (err) callback(err);
                console.log("Number of documents inserted: " + res.insertedCount);
            });
            db.close();
        });
    },
    getAll: function (handleItems, callback) {
        MongoClient
        .connect(mongoUrl)
        .then(function(db) {
            var dbo = db.db("ResizePhotosChallenge");
            return dbo.collection("images").find({ },{ "_id": 0 }).toArray();
        })
        .then(function(items) {
            handleItems(items);
        })
        .catch(function(err){
           if(err) callback(err);
        });
    }
};