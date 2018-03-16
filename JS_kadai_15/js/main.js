$(document).ready(function(){

  // 0:operator,1:number
  var num_flag=0;
  localStorage.setItem("num_flag",num_flag);
  // 0:nan,1:+,2:-,3:×,4:÷,5:X!,6:log,7:ac
  var ope=0;
  localStorage.setItem("ope",ope);

  // button
  $('.btn').on('click',function(e){
    num_flag=localStorage.getItem("num_flag");
    ope=localStorage.getItem("ope");

    var num = parseInt($(this).val());
    // console.log("num type");
    // console.log($.type(num));

    // flag
    if($.isNumeric(num)){
      // number
      num_flag=1;
    }else{
      // operator
      num_flag=0;

      if($(this).val()=="plus"){
        ope=1;
      }else if ($(this).val()=="minus") {
        ope=2;
      }else if ($(this).val()=="mult") {
        ope=3;
      }else if ($(this).val()=="div") {
        ope=4;
      }else if ($(this).val()=="fact") {
        ope=5;
      }else if ($(this).val()=="log") {
        ope=6;
      }else if ($(this).val()=="ac") {
        ope=7;
      }else{
        console.log("operation error");
      }
    }

    // console.log("num_flag");
    // console.log(num_flag);
    // console.log("ope");
    // console.log(ope);

    var view = parseInt($("#view").val());

    if(view==0){
      // default
      view=num;
    }else if (ope==0 && num_flag==1) {
      view=view*10+num;
    }else if (ope!=0 && num_flag==1){
      if(ope==1){
        view+=num;
        ope=0;
      }else if (ope==2){
        view-=num;
        ope=0;
      }else if (ope==3){
        view*=num;
        ope=0;
      }else if (ope==4){
        view/=num;
        ope=0;
      }else{
        console.log("operation error");
      }
    }else if (ope!=0 && num_flag==0) {
      if (ope==5) {
        if(view<1){
          alert("１以上の数字を入力して下さい。");
          return;
        }else{
          for(var i = view - 1; i > 0; i--){
            view*=i;
          }
        }
        ope=0;
      }else if (ope==6) {
        view=Math.log(view);
        ope=0;
      }else if (ope==7) {
        num_flag=0;
        ope=0;
        view=0;

        localStorage.clear();
      }else{
        console.log("ope error");
      }
    }else{
      console.log("flag error");
    }

    localStorage.setItem("num_flag",num_flag);
    localStorage.setItem("ope",ope);
    console.log(localStorage);

    //output
    $('#view').val(view+'');
    // console.log("view");
    // console.log(view);
  });

});
