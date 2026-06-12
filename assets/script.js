function criaCalculador(){
    return {
       display: document.querySelector('.display'),
       btnClear: document.querySelector('.btn-clear'),
       btnEqual: document.querySelector('.btn-eq'),
       btnApagaUm: document.querySelector('.btn-del'),

       equalDisplay(){
            let conta = this.display.textContent;
            try{
                conta = eval(conta);
                if(!conta){
                    alert('Conta inválida');
                    return;
                }

                this.display.textContent = conta;
            }catch(e){
                alert('Conta inválida');
                return;
            }
       },

       apagaUm(){
            this.display.textContent = this.display.textContent.slice(0, -1);
       },
       
       clearDisplay() {
            this.display.textContent = '';
       },
       
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
            
        },

        pressionaEnter() {
            document.addEventListener('keyup', e => {
                if (e.key === 'Enter') {
                    this.equalDisplay();
                }
            });
        },

        
        cliqueBotoes() {
            document.querySelector('.buttons').addEventListener('click', function(e) {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if (el.classList.contains('btn-eq')) {
                    this.equalDisplay();
                }

            }.bind(this));
        },

        btnParaDisplay(valor) {
            this.display.textContent += valor;
        }

    };
}

const calculadora = criaCalculador();
calculadora.inicia();