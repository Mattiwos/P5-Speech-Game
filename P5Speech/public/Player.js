class Player{
    constructor(arg){
      this.loc = arg
    }
    newpos(loc,wdth, hght){
      this.loc = loc
      this.spcw = wdth
      this.spch = hght
    }
    senddata(){
      socket.emit('locationdata', {
        data: this.data,
        gameroom: gameroom,
        username: username
      });
    }
    movement(x,y,nx,ny,currpos){
      this.x = x
      this.y = y
      this.nx = nx
      this.ny = ny
      this.currloc = currpos
  
      this.fill(this.nx, this.ny, this.currloc)
      this.unfill(this.x, this.y, this.currloc)
  
    }
    fill(px,py,currpos){
      this.px = px
      this.py = py
      this.currloc = currpos
      currloc.push([this.px,this.py,'1']) //1 == filled 0 === empty
      
    }
    unfill(px,py,currpos){
      this.px = px
      this.py = py
      this.currloc = currpos

      for (var i = 0; i <this.currloc.length; i++){
          if (currloc[i] == [this.px,this.py,'1']){
              currloc = curr.splice(i,1) //remove whatever at the location
              
          }
      }
      
  
  
    }
    display(currloc){
      this.currloc = currloc

      for (var i = 0; i < currloc.length; i++){
          
        if (currloc.length >= 1){

            
            fill(255,0,0)
            rect(this.loc[Number(currloc[i][0])][0],this.loc[Number(currloc[i][1])][1],this.spcw,this.spch) //I can add if location is occupid and rank with this method
        }
      }
  
  
  
    }
  
  }