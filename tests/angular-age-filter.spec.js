describe('filter', function() {
  var filter;

  beforeEach(module('srph.age-filter'));
  beforeEach(inject(function(ageFilter) { filter = ageFilter; }));

  it('should output minus 5 the current year', function() {
    var d = new Date();
    d.setYear( d.getFullYear() - 5 );

    expect(filter(d)).toEqual(5);
    expect(filter( (new Date().getFullYear() - 5).toString() )).toEqual(5);
  });

  it('should output 65 years old', function() {
    var d = new Date();
    d.setYear( d.getFullYear() - 65 );

    expect(filter(d)).toEqual(65);
  })

  it('should output 0 years old', function() {
    var d = new Date();

    expect(filter(d)).toBe(0);
  });

  describe('set current', function() {
    it('should output 6 years old if current is set to 7 years ago and birthdate is set to 13 years ago', function() {
      var d = (new Date().getFullYear() - 13).toString();
      var c = (new Date().getFullYear() - 7).toString();

      expect(filter(d, c)).toEqual(6);
    });

    it('should output normally (like 5 years old if birthdate was 5 years ago) if not set', function() {
      var d = (new Date().getFullYear() - 5 ).toString();
      expect( filter(d) ).toEqual(5);
    });
  })
});