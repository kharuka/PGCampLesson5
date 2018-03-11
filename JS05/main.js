$(document).ready(function(){
  // alert('hoge');

  // console.log(123);

  // var elem='<a href="#">Next Page</a>';
  // $('#BUTTON').on('click',function(e){
  //   $("#js").html(elem);
  //   $("#js").text(elem);
  //   $("#js").css("color","#ff0");
  //   $("#js").show(4000);
  //   $("#js").prepend(elem);
  //   $("#js").append(elem);
  //   $("#js").empty();
  //   $("#js").remove();
  // });

  // console.log(elem);

  $('#hide').on('click',function(e){
    $('#ex').hide(2000);
  });

  $('#show').on('click',function(e){
    $('#ex').show(2000);
    var num = $("#count").val();
    // console.log(num);
    num++;
    // console.log(num);
    $('#count').val(num);
    var str = num + '';
    // console.log(str);
    $('#count').html(str);
    $('#count').css("border","#000 "+str+"px solid");
  });
});
