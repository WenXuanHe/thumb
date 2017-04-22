describe("Thumb", function() {
  it("|origin expect 0", function() {
    var thumb =  $.thumb(0, '#thumb');
    expect(thumb.getPraiseCount()).toBe(0);
  });

  it("|expect add 1 by once", function() {
    var thumb = $.thumb();
    var i = 0;
    while(i < 50){
      expect(thumb.praiseAction()).toBe(i+1);
      i++;
    }
  });
});