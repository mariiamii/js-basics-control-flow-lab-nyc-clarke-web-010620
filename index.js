function scuberGreetingForFeet(distance){
  if (distance <= 400){
    return 'This one is on me!';
  } else if (distance > 2000 && distance <= 2500){
    return 'I will gladly take your thirty bucks.';
  } else if (distance > 2500){
    return 'No can do.'
  }
}
 
function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

describe('ternaryCheckCity()', function () {
    it('returns "Ok, sounds good." when the city is NYC', function () {
      expect(ternaryCheckCity('NYC')).to.equal('Ok, sounds good.');
    });

    it('should return "No go." if the destination city is not NYC', function () {
      expect(ternaryCheckCity('Pittsburgh')).to.equal('No go.');
    });
  });


function switchOnCharmFromTip(){
  // Write your code here!
}