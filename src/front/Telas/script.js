

function Validar(){
    var strCPF = document.getElementById("cpf").value;

    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000"){alert("CPF INCORRETO");return false;} 
     
  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ){alert("CPF INCORRETO");return false;}
   
  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ){alert("CPF INCORRETO");return false;}
    //Aqui ele valida usuario e senha;  
    return true;

}
