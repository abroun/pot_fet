'use strict';

describe('Service: helperMethods', function () {

  // load the service's module
  beforeEach(module('potFetApp'));

  // instantiate service
  var helperMethods;
  beforeEach(inject(function (_helperMethods_) {
    helperMethods = _helperMethods_;
  }));

  // Make sure that the tests give the same results regardless of this machine's timezone
  // This assumes that the timezone of the dateString is UTC
  function modifyDateStringForCurrentTimezone(dateString)
  {
      var date = new Date(dateString);
      date.setMinutes( date.getMinutes() + date.getTimezoneOffset() );
      
      return date.toISOString();
  }
  
  it('should correctly format this 1st date', function () {
    var dateString = modifyDateStringForCurrentTimezone('2015-06-19T18:07:55Z');
      
    expect(helperMethods.formatPublishedDate(dateString)).toEqual('19th Jun 2015 at 18:07');
  });
  
  it('should also correctly format this 2nd date', function () {
    var dateString = modifyDateStringForCurrentTimezone('2015-05-03T09:07:55Z');
    
    expect(helperMethods.formatPublishedDate(dateString)).toEqual('3rd May 2015 at 09:07');
  });
  
  it('should also correctly format this 3rd date', function () {
    var dateString = modifyDateStringForCurrentTimezone('2015-03-02T09:07:55Z');
    
    expect(helperMethods.formatPublishedDate(dateString)).toEqual('2nd Mar 2015 at 09:07');
  });
  
  it('should also correctly format this 4rd date', function () {
    var dateString = modifyDateStringForCurrentTimezone('2014-09-01T11:17:55Z');
    
    expect(helperMethods.formatPublishedDate(dateString)).toEqual('1st Sep 2014 at 11:17');
  });

});
