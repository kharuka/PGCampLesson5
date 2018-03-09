<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

  <button id="save">SAVE</button>
  <button id="get">GET</button>
  <button id="rm">Remove</button>
  <button id="cl">Clear</button>

  <div id="view">

  </div>

<!-- script -->
<script>
  var save=document.querySelector("#save");
  save.onclick=function(e){
    localStorage.setItem("name","山崎");
    localStorage.setItem("name2","kharuka");
    // console.log(localStorage);
  };

  var save=document.querySelector("#get");
  get.onclick=function(e){
    var g=localStorage.getItem("name");
    document.querySelector("#view").innerHTML=g;
    // console.log(localStorage);
  };

  var rm=document.querySelector("#rm");
  rm.onclick=function(e){
    localStorage.removeItem("name");
    // console.log(localStorage);
  };

  var cl=document.querySelector("#cl");
  cl.onclick=function(e){
    localStorage.clear();
    // console.log(localStorage);
  };
</script>

</body>
</html>
