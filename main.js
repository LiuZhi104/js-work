const isInRangeOfOneToThousands = require('../main');

it ('should return true when add startNumber and endNumber in a range of 1 to 1000', () => {
    expect(isInRangeOfOneToThousands(1, 2)).toBe(true);
});


it ('should return true when add startNumber and endNumber  1 to 1000', () => {
    expect(isInRangeOfOneToThousands(1001,1002)).toBe(false);
});

it('should return string when add startNumber and endNumber that result like x*y‘,()=>{
   expect(createMuiltplyEquation(1,2)).toBe(2);
}):