function verify(){
    var date = new Date();
    var year = date.getFullYear();
    var yearInput = document.getElementById('txtano').value;
    var result = document.getElementById('res');

    if(yearInput == 0 || yearInput > year){
        alert("[ERRO]: Dados inválidos, tente novamente!")
    }else{
        var sexInput = document.getElementsByName('radsex');
        var idade = year - Number(yearInput);
        var gen = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'photo')
        if(sexInput[0].checked){
            gen = "Homem"
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', './imgs/foto-bebe-m.png');
            }else if(idade < 21){
                img.setAttribute('src', './imgs/foto-jovem-m.png');
            }else if(idade < 50){
                img.setAttribute('src', './imgs/foto-adulto-m.png');
            }else{
                img.setAttribute('src', './imgs/foto-idoso-m.png');
            }
        }else if(sexInput[1].checked){
            gen = "Mulher"
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', './imgs/foto-bebe-f.png');
            }else if(idade < 21){
                img.setAttribute('src', './imgs/foto-jovem-f.png');
            }else if(idade < 50){
                img.setAttribute('src', './imgs/foto-adulto-f.png');
            }else{
                img.setAttribute('src', './imgs/foto-idoso-f.png');
            }
        }
        result.style.justifyContent
        result.innerHTML = `Detectamos ${gen} com ${idade} anos. </br></br>`
        result.appendChild(img);
    }
    
}