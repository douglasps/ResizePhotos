var chai = require('chai');
chai.should();
chai.use(require('chai-things'));
var PhotoResize = require('./../services/photoResize');
var serverAddress = "http://127.0.0.1";

describe('photoResize', function() {
  it('getFormatedImages() should return 10 valid images reasized', function(done) {
    PhotoResize.getFormatedImages(serverAddress, function(imagesFormated){
        imagesFormated.should.have.lengthOf(10);

        imagesFormated.should.all.have.property('small')
            .that.not.to.be.a('null')
            .that.not.to.be.a('undefined');
        imagesFormated.should.all.have.property('medium')
            .that.not.to.be.a('null')
            .that.not.to.be.a('undefined');
        imagesFormated.should.all.have.property('large')
            .that.not.to.be.a('null')
            .that.not.to.be.a('undefined');

        done();
    });
  });
});