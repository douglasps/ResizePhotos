var chai = require('chai');
chai.should();
chai.use(require('chai-things'));
var ImageRepository = require('./../services/imageRepository');

describe('ImageRepository', function() {
    it('insertAll() should not throw any exception', function(done) {
        var images = [
            { small : "smallUrl1", medium: "mediumUrl1", large: "largeUrl1" },
            { small : "smallUrl2", medium: "mediumUrl2", large: "largeUrl2" },
            { small : "smallUrl3", medium: "mediumUrl3", large: "largeUrl3" },
            { small : "smallUrl4", medium: "mediumUrl4", large: "largeUrl4" },
            { small : "smallUrl5", medium: "mediumUrl5", large: "largeUrl5" },
        ];
        ImageRepository.insertAll(images, function(err){
            err.should.be.a('null');
        });
        done();
    });

    it('removeAll() should not throw any exception', function(done) {
        ImageRepository.removeAll(function(err){
            err.should.be.a('null');
        });
        done();
    });

  it('getAll() should not throw any exception and get all the images inserted', function(done) {
    var images = [
        { small : "smallUrl1", medium: "mediumUrl1", large: "largeUrl1" },
        { small : "smallUrl2", medium: "mediumUrl2", large: "largeUrl2" },
        { small : "smallUrl3", medium: "mediumUrl3", large: "largeUrl3" },
        { small : "smallUrl4", medium: "mediumUrl4", large: "largeUrl4" },
        { small : "smallUrl5", medium: "mediumUrl5", large: "largeUrl5" },
    ];
    ImageRepository.removeAll(function(err){
        err.should.be.a('null');
    });
    ImageRepository.insertAll(images, function(err){
        err.should.be.a('null');
    });
    ImageRepository.getAll(
        function(items){
            items.should.have.lengthOf(5);
        },
        function(err){
            err.should.be.a('null');
        }
    );
    done();
  });
});