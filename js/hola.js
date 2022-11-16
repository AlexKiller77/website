function BMI(){
        var w= parseInt( document.getElementById("w").value);
        var h= parseInt( document.getElementById("h").value);
          h=h*12
        var div=w/Math.pow((h),2)
        
        var result=703*div
       
    
        var text=""
      if(result<18.5){
        text="  Estas debajo de tu peso ideal"
      }else if(result>=18.5 && result<=24.9){
        text=" Tienes un Peso Normal"
      }else if(result>=25 && result<=29.9){
        text=" Tienes Soprepeso"
      }else{
        text=" Tiene Obesidad"
      }
        document.getElementById('bmi').innerHTML=result.toFixed(2)+text;
        }
        function root(){
        var m = parseInt( document.getElementById("m").value);
        var pro=1;
   for (var i = 1; i <= m; i++) {
     var el=Math.pow(2*i,2)
pro=pro*((el) /(el-1))
}
        var result=2*pro;
        document.getElementById('Raiz').innerHTML=result;
        }