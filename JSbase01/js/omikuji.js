function rand(){
  return Math.floor(Math.random()*5+1);
}

function omikuji(num){
  if(num==1){
      return "大吉";
  }else if (num==2) {
      return "中吉";
  }else if (num==3) {
      return "小吉";
  }else if (num==4) {
      return "吉";
  }else {
      return "凶";
  }
}
