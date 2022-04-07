function timer () {
    function criaHoraDosSegundos (segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC',
        });
    }
    
    const relogio = document.querySelector('.relogio');
    // const iniciar = document.querySelector('.iniciar');
    // const pausar = document.querySelector('.pausar');
    // const zerar = document.querySelector('.zerar');
    let segundos= 0;
    let timer;
    
    function iniciaRelogio () {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        timer = setInterval(() => {
            segundos += 1;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }
    
    function pausaRelogio () {
        relogio.classList.add('pausado');
        clearInterval(timer);
    }
    
    function zeraRelogio () {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        segundos = 0;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }
    
    
    document.addEventListener('click', function (e) {
        const el = e.target;
        
        if (el.classList.contains('zerar')){
            zeraRelogio();
        }
    
        if (el.classList.contains('iniciar')){
            iniciaRelogio();
        }
    
        if (el.classList.contains('pausar')){
            pausaRelogio();
        }
    });
    
    
    // iniciar.addEventListener('click', function (event) {
    //     iniciaRelogio();
    // });
    
    // pausar.addEventListener('click', function (event) {
    //     pausaRelogio();
        
    // });
    
    // zerar.addEventListener('click', function (event) {
    //     zeraRelogio();
    // });

}

timer();


