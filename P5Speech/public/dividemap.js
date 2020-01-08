function dividemap(){
    
    var spcw = width /spcd;
    var spch = height/spcd;
    fill(0)
    var roundx = 0
    var roundy = 0
    for (var i = 0; i <= width; i+= spcw){ // width
      fill(0)
      textAlign(CENTER, CENTER);
      textSize(22);
      text(roundx,i+((width/spcd)/2),0+((height/spcd)/2))
  
      line(i,0,i,height)
      locx.push(i)
      for (var e = 0; e <= height; e+= spch){ // width
        locy.push(e);
        roundy+=1
      }
      roundy =0
      roundx+= 1
    }
    roundy = 0
    for (var e = 0; e <= height; e+= spch){ // width
      fill(0)
      textAlign(CENTER, CENTER);
      textSize(22);
      text(roundy,0+((width/spcd)/2),e+((height/spcd)/2))
      roundy++
  
      line(0,e,width,e)
  
    }
    for (var i = 0; i< (locy.length); i++){
      loc.push([locx[i],locy[i]])
    }
   
  
  }