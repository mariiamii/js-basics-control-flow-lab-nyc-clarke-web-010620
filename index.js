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
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case "generous":
      return 'Thank you so much.'
    case
  }
}
  
  describe('switchOnCharmFromTip()', function () {
    it('should return "Thank you so much." if the tip is generous', function () {
      expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
    });

    it('should return "Thank you." if the tip is not as generous', function () {
      expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
    });

    it('should return "Bye." if anything else', function () {
      expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
    });
