describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
    
    function flatten(arr)
    var expected[]
    for (var i = 0; i < arr.length; i++) {
      var number = arr[i]
      if (Array.isArray(number)) {
        flatten(number)
        
      }
      
      expected.push(number)
      

    expect(arr).toEqual(expected);
  });
});
