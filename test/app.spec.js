describe("angularLocalStorage", function () {

  beforeEach(module('angularLocalStorage'));

  var $service;


  beforeEach(inject(function(_localStorageService_) {
    $service = _localStorageService_;
  }));

  describe("service", function () {
    it("save data to localStorage, return a object ", function () {
      result = $service.save('name', 'value');
      expect(result).toEqual('value');
    });

    it('get data from localStorage return a object', function (){
      result = $service.get('name');
      expect(result).toEqual('value');
    });
    it('remove data from localStorage, return a object message', function(){
      result = $service.remove('name');
      expect(result).toEqual({message:'removed'});
    });
  });

});
