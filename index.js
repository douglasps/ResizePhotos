var express = require('express');
var PhotoResize = require('./services/photoResize.js');
var ImageRepository = require('./services/imageRepository.js');
var app = express();
var createImagesFormated = true;

app.get('/', function(req, res) {
    
    if(createImagesFormated)
    {
        var serverAddress = req.protocol + "://" + req.get("host");
        PhotoResize.getFormatedImages(serverAddress, function(imagesFormated){
            ImageRepository.removeAll(function(err){
                if(err) throw rr;
            });
            ImageRepository.insertAll(imagesFormated, function(err){
                if(err) throw rr;
            });
        })
        createImagesFormated = false;
        var fullUrl = req.protocol + "://" + req.get("host") + "/api/images/";
        res.send('Images created successfully<br/><a href="'+fullUrl+'">Go to resized images</a>');
    }
    else
        res.send('Welcome');
});

app.get("/api/images", function(req, res) {
    ImageRepository.getAll(function(items){
        res.send(items);
    },
    function(err){
        if(err) throw err;
    });
})

app.use('/images', express.static(__dirname+'/images/'));
// Aplication available in http://127.0.0.1:9000/
app.listen(9000);