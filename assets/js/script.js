let result = document.getElementById('resultado');
result.innerHTML = 'Aguardando número...'

function verTabuada(){
    result.innerHTML = '';
    let tab = document.getElementById('tab');
   
    if(tab.value.length == 0){
        window.alert('Insira um número!');
    } else {
        let numTab = Number(tab.value);

        for (let c = 0; c <=10; c++){
            
            let mult = c * numTab;
            result.innerHTML += `${c} x ${numTab} = ${mult} <br>`; 
            result.style.backgroundColor = '#e7c1e1ce';
        };
    }; 
};