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

<!-- script -->
<script>
  var save=Document.querySelector("#save");
  save.onclick=function(e){
    localStorage.setItem("name","山崎");
  };
</script>

</body>
</html>
