$(document).ready(function(){

    $("input[name=cep]").focusout(function(){
    var cep = $(this).val().()replace(/[^0-9]/,'');
    var url = "https://viacep.com.br/ws/"+cep+"/json/";

        if(cep)
           {
            $.ajax({
                url: url,
                type:"get",
                dataType:"json",
                success:function(data){
            alert(data.bairro);
        },
            error:function(error){
            }
           });
          }
    });
    
});    