function Calculadora () {
    const display = document.querySelector('.display');
    const numero = document.querySelector('btn-num')

    this.inicia = () => {
        cliqueBotoes();
        pressionaEnter();
    };

    pressionaEnter = () => {
        display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                botaoIgualA();
            }
        });
    };

    btnParaDisplay = (valor) => {
        display.value += valor;
    };

    clearDisplay = () => {
        display.value = '';
    };

    botaoDel = () => {
        display.value = display.value.slice(0, -1);
    };

    botaoIgualA = () => {
        let conta = display.value;

            try {
                conta = eval(conta);
                
                if(!conta) {
                    alert('Conta inválida!')
                    return;
                }

                display.value = String(conta);
            
            } catch(e) {
                alert('Conta inválida!')
                return;
            }
    };
    
    cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if(el.classList.contains('btn-num')) {
                btnParaDisplay(el.innerHTML);
            }
            if(el.classList.contains('btn-clear')) {
                clearDisplay()
            };
            if(el.classList.contains('btn-del')) {
                botaoDel();
            };
            if(el.classList.contains('btn-eq')) {
                botaoIgualA();
            };
            display.focus();
        });
        
    };
};

const calculadora = new Calculadora();
calculadora.inicia();