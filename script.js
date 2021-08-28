function cesar() {
    let cod = document.getElementById('frase');
    let trad = document.getElementById('res')
    

    if(cod.value.length == 0){
        trad.innerHTML='prencha o campo';
    }else{
        let resul = cod.value.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
        trad.innerHTML = resul;
    }
 
    
    }
    
   
   
    