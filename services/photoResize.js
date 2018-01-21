var request = require('request');
var requestBuffered = require('request').defaults({ encoding: null });
var sharp = require('sharp');

var imagesUrl = "http://54.152.221.29/images.json";

module.exports = {
  getFormatedImages: function (serverAddress, handleFormatedImages) {
    request(imagesUrl, function(error, response, body){
        if (!error && response.statusCode == 200) {
           var images = JSON.parse(body).images;
           var formatedImages = images.map(function(item){
                var fileName = item.url.replace(/^.*[\\\/]/, "");
                var smallUrl = serverAddress + "/images/small_" + fileName;
                var mediumUrl = serverAddress + "/images/medium_" + fileName;
                var largeUrl = serverAddress + "/images/large_" + fileName;
                requestBuffered.get(item, createFormatedImages);
                return {
                    small : smallUrl,
                    medium : mediumUrl,
                    large : largeUrl,
                    original : item.url
                };
           });

           handleFormatedImages(formatedImages);
        }
    });
  }
};

function createFormatedImages(err, res, body){
    var fileNameResponse = res.request.uri.href.replace(/^.*[\\\/]/, '');
    var smallNameResponse = "small_" + fileNameResponse;
    var mediumNameResponse = "medium_" + fileNameResponse;
    var largeNameResponse = "large_" + fileNameResponse;
    sharp(body)
        .resize(320, 240)
        .toFile("images/"+smallNameResponse, (err, info) => {});
    sharp(body)
        .resize(384, 288)
        .toFile("images/"+mediumNameResponse, (err, info) => {});
    sharp(body)
        .resize(640, 480)
        .toFile("images/"+largeNameResponse, (err, info) => {});
}