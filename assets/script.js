function Calculadora(){
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');
    this.btnEqual = document.querySelector('.btn-eq');
    this.btnApagaUm = document.querySelector('.btn-del');

    this.equalDisplay = () =>{
         let conta = this.display.textContent;
            try{
                conta = conta.replace(/÷/g, '/').replace(/x/g, '*');
                conta = eval(conta);
                this.display.textContent = conta;
            }catch(e){
                alert('Conta inválida');
                return;
            };
    };

    this.apagaUm = () => this.display.textContent = this.display.textContent.slice(0, -1);

    this.clearDisplay = () => this.display.textContent = '';
    this.inicia = () =>{
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.pressionaEnter = () =>{
         document.addEventListener('keyup', e => {
                if (e.key === 'Enter') {
                    this.equalDisplay();
                }
            });
    };

    this.cliqueBotoes = () =>{
        document.querySelector('.buttons').addEventListener('click', function(e) {
                const el = e.target;
                if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
                if (el.classList.contains('btn-clear')) this.clearDisplay();
                if (el.classList.contains('btn-del')) this.apagaUm();
                if (el.classList.contains('btn-eq')) this.equalDisplay();

            }.bind(this));
    }

    this.btnParaDisplay = (valor) => this.display.textContent += valor;
}

const calculadora = new Calculadora();
calculadora.inicia();
