$(document).ready(function(){
  // 0:operator,1:number
  var num_flag=0;
  localStorage.setItem("num_flag",num_flag);
  // 0:nan,1:+,2:-,3:×,4:÷
  var ope=0;
  localStorage.setItem("ope",ope);

  // 1
  $('#one').on('click',function(e){
    // flag
    num_flag=1;
    localStorage.setItem("num_flag",num_flag);
    // console.log(localStorage);
    var ope=localStorage.getItem("ope");
    // console.log(ope);
    var view = parseInt($("#view").val());
    var num = parseInt($("#one").val());
    // console.log($.type(num));

    if(view==0){
      // default
      view=num;
    }else if (ope==0 && num_flag==1) {
      view=view*10+num;
    }else if (ope!=0 && num_flag==1){
      if(ope==1){
        view=view+num;
      }else if (ope==2){
        view=view-num;
      }else if (ope==3){
        view=view*num;
      }else if (ope==4){
        view=view/num;
      }else{
        console.log("operation error");
      }
    }else{
      console.log("flag error");
    }

    //output
    $('#view').val(view+'');
    console.log(view);
  });

  // 2
  $('#two').on('click',function(e){
    // flag
    num_flag=1;
    localStorage.setItem("num_flag",num_flag);
    var ope=localStorage.getItem("ope");

    var view = parseInt($("#view").val());
    var num = parseInt($("#two").val());

    if(view==0){
      // default
      view=num;
    }else if (ope==0 && num_flag==1) {
      view=view*10+num;
    }else if (ope!=0 && num_flag==1){
      if(ope==1){
        view=view+num;
      }else if (ope==2){
        view=view-num;
      }else if (ope==3){
        view=view*num;
      }else if (ope==4){
        view=view/num;
      }else{
        console.log("operation error");
      }
    }else{
      console.log("flag error");
    }

    //output
    $('#view').val(view+'');
  });

  // 3
  $('#three').on('click',function(e){
    // flag
    num_flag=1;
    localStorage.setItem("num_flag",num_flag);
    var ope=localStorage.getItem("ope");

    var view = parseInt($("#view").val());
    var num = parseInt($("#three").val());

    if(view==0){
      // default
      view=num;
    }else if (ope==0 && num_flag==1) {
      view=view*10+num;
    }else if (ope!=0 && num_flag==1){
      if(ope==1){
        view=view+num;
      }else if (ope==2){
        view=view-num;
      }else if (ope==3){
        view =view*num;
      }else if (ope==4){
        view=view/num;
      }else{
        console.log("operation error");
      }
    }else{
      console.log("flag error");
    }

    //output
    $('#view').val(view+'');
  });

  // 4
  $('#four').on('click',function(e){
    // flag
    num_flag=1;
    localStorage.setItem("num_flag",num_flag);
    var ope=localStorage.getItem("ope");

    var view = parseInt($("#view").val());
    var num = parseInt($("#four").val());

    if(view==0){
      // default
      view=num;
    }else if (ope==0 && num_flag==1) {
      view=view*10+num;
    }else if (ope!=0 && num_flag==1){
      if(ope==1){
        view=view+num;
      }else if (ope==2){
        view=view-num;
      }else if (ope==3){
        view=view*num;
      }else if (ope==4){
        view=view/num;
      }else{
        console.log("operation error");
      }
    }else{
      console.log("flag error");
    }

    //output
    $('#view').val(view+'');
  });

  // 5
  $('#five').on('click',function(e){
    // flag
    num_flag=1;
    localStorage.setItem("num_flag",num_flag);
    var ope=localStorage.getItem("ope");

    var view = parseInt($("#view").val());
    var num = parseInt($("#five").val());

    if(view==0){
      // default
      view=num;
    }else if (ope==0 && num_flag==1) {
      view=view*10+num;
    }else if (ope!=0 && num_flag==1){
      if(ope==1){
        view=view+num;
      }else if (ope==2){
        view=view-num;
      }else if (ope==3){
        view=view*num;
      }else if (ope==4){
        view=view/num;
      }else{
        console.log("operation error");
      }
    }else{
      console.log("flag error");
    }

    //output
    $('#view').val(view+'');
  });

  // 6
  $('#six').on('click',function(e){
    // flag
    num_flag=1;
    localStorage.setItem("num_flag",num_flag);
    var ope=localStorage.getItem("ope");

    var view = parseInt($("#view").val());
    var num = parseInt($("#six").val());

    if(view==0){
      // default
      view=num;
    }else if (ope==0 && num_flag==1) {
      view=view*10+num;
    }else if (ope!=0 && num_flag==1){
      if(ope==1){
        view=view+num;
      }else if (ope==2){
        view=view-num;
      }else if (ope==3){
        view=view*num;
      }else if (ope==4){
        view=view/num;
      }else{
        console.log("operation error");
      }
    }else{
      console.log("flag error");
    }

    //output
    $('#view').val(view+'');
  });

  // 7
  $('#seven').on('click',function(e){
    // flag
    num_flag=1;
    localStorage.setItem("num_flag",num_flag);
    var ope=localStorage.getItem("ope");

    var view = parseInt($("#view").val());
    var num = parseInt($("#seven").val());

    if(view==0){
      // default
      view=num;
    }else if (ope==0 && num_flag==1) {
      view=view*10+num;
    }else if (ope!=0 && num_flag==1){
      if(ope==1){
        view=view+num;
      }else if (ope==2){
        view=view-num;
      }else if (ope==3){
        view=view*num;
      }else if (ope==4){
        view=view/num;
      }else{
        console.log("operation error");
      }
    }else{
      console.log("flag error");
    }

    //output
    $('#view').val(view+'');
  });

  // 8
  $('#eight').on('click',function(e){
    // flag
    num_flag=1;
    localStorage.setItem("num_flag",num_flag);
    var ope=localStorage.getItem("ope");

    var view = parseInt($("#view").val());
    var num = parseInt($("#eight").val());

    if(view==0){
      // default
      view=num;
    }else if (ope==0 && num_flag==1) {
      view=view*10+num;
    }else if (ope!=0 && num_flag==1){
      if(ope==1){
        view=view+num;
      }else if (ope==2){
        view=view-num;
      }else if (ope==3){
        view=view*num;
      }else if (ope==4){
        view=view/num;
      }else{
        console.log("operation error");
      }
    }else{
      console.log("flag error");
    }

    //output
    $('#view').val(view+'');
  });

  // 9
  $('#nine').on('click',function(e){
    // flag
    num_flag=1;
    localStorage.setItem("num_flag",num_flag);
    var ope=localStorage.getItem("ope");

    var view = parseInt($("#view").val());
    var num = parseInt($("#nine").val());

    if(view==0){
      // default
      view=num;
    }else if (ope==0 && num_flag==1) {
      view=view*10+num;
    }else if (ope!=0 && num_flag==1){
      if(ope==1){
        view=view+num;
      }else if (ope==2){
        view=view-num;
      }else if (ope==3){
        view=view*num;
      }else if (ope==4){
        view=view/num;
      }else{
        console.log("operation error");
      }
    }else{
      console.log("flag error");
    }

    //output
    $('#view').val(view+'');
  });

  // plus
  $('#plus').on('click',function(e){
    // flag
    ope=1;

    localStorage.setItem("ope",ope);
    // console.log(ope);
  });

  // minus
  $('#minus').on('click',function(e){
    // flag
    ope=2;

    localStorage.setItem("ope",ope);
  });

  // mult
  $('#mult').on('click',function(e){
    // flag
    ope=3;

    localStorage.setItem("ope",ope);
  });

  // div
  $('#div').on('click',function(e){
    // flag
    ope=4;

    localStorage.setItem("ope",ope);
  });

  // ac
  $('#ac').on('click',function(e){
    // flag
    num_flag=0;
    ope=0;

    localStorage.clear();

    //output
    $('#view').val('0');

  });

});
