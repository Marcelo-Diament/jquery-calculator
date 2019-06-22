$(function(){

    let mais = $("#plus");
    let menos = $("#menos");
    let dividido = $("#por");
    let multiplicado = $("#vezes");
    let igual = $("#equal");
    let total = $("#total");
    let historico = $("#listaHistorico");
    let botoes = $(".btn");
    let numeros = $(".num");
    let operadores = $(".ope");
    
    let calculoParcial = 0;
    let calculo = 0;
    let resultadoParcial = 0;
    let resultado = 0;
    
    $(numeros).on("click", function(){
        total.append($(this).val());
    });
    
    $(operadores).on("click", function(){
        total.append(" "+$(this).val()+" ");
    });
    
    $("#clearLast").on("click", function(){
        $("small").text("");
        var len = total.text().length;
        var letranova = "";
        for( i = 0 ; i < len - 1 ; i++ ){
            if(i != (len - 1)){
                var letra = total.text()[i];
                $("small").append(letra);
            }
        }
        total.text($("small").text());
        $("small").text("");
    });
    
    $("#clear").on("click", function(){
        total.text("");
    });
    
    $(igual).on("click", function(){
        let subtotal = eval(total.text());
        let subtotalLen = total.text().length
        if(subtotal === undefined ){
          alert("Adicione um número");
        } else {
          alert(subtotal);
          let hist = total.text();
          historico.prepend("<li>"+hist+" = "+subtotal+"</li>");
          total.text(subtotal);
        }
  });
  
  var limparHist = $("#limparHist")
  limparHist.on("click", function(){
      historico.text("")
  })
  
  /* var ordHistRecentes = $("histRecentes")
  ordHistRecentes.on("click", function(){
  historico.style = "flex-direction: column !important"
  historico.text() = historico.text()
  })
  
  var ordHistAntigos = $("histAntigos")
  ordHistAntigos.on("click", function(){
  historico.style = "flex-direction: column-reverse !important"
  }) */

  document.addEventListener('keydown', function(event) {
      
    switch(event.keyCode){
      case 48:
      case 96:
        total.append(0);
      break
      case 49:
      case 97:
        total.append(1);
      break
      case 50:
      case 98:
        total.append(2);
      break
      case 51:
      case 99:
        total.append(3);
      break
      case 52:
      case 100:
        total.append(4);
      break
      case 53:
      case 101:
        total.append(5);
      break
      case 54:
      case 102:
        total.append(6);
      break
      case 55:
      case 103:
        total.append(7);
      break
      case 56:
      case 104:
        total.append(8);
      break
      case 57:
      case 105:
        total.append(9);
      break
      case 58:
      case 105:
        total.append(9);
      break
      case 106:
      // case 103:
        total.append(' * ');
      break
      case 107:
      // case 103:
        total.append(' + ');
      break
      case 109:
      // case 103:
        total.append(' - ');
      break
      case 111:
      case 191:
        total.append(' / ');
      break
       case 219:
        total.append(' ( ');
      break
       case 221:
        total.append(' ) ');
      break
      // case 110:
      // case 188:
      // case 190:
      //   total.append(' . ');
      // break
      case 46:
      case 8:
        $("small").text("");
        var len = total.text().length;
        var letranova = "";
        for( i = 0 ; i < len - 1 ; i++ ){
            if(i != (len - 1)){
                var letra = total.text()[i];
                $("small").append(letra);
            }
        }
        total.text($("small").text());
        $("small").text("");
      break
      case 27:
        total.text("")
      break
      case 13:
      case 187:
        let subtotal = eval(total.text());
        let subtotalLen = total.text().length
        if(subtotal === undefined ){
          alert("Adicione um número");
        } else {
          alert(subtotal);
          let hist = total.text();
          historico.prepend("<li>"+hist+" = "+subtotal+"</li>");
          total.text(subtotal);
        }
      break
      default:
    }

  });
    
});