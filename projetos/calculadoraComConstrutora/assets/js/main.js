//factory function
//criar a calculadora como se fosse
//um objeto
// não precisaria ser factory function,
//pois só precisamos de uma calculadora

function Calculadora() {
  
    // atributos ou métodos privados

    const display = document.querySelector(".display")
 
    this.clearDisplay = () => {
      display.value = "";
    }

    this.inicia = ()=> {
      this.cliqueBotoes();
      this.pressionaEnter();
    }
    this.pressionaEnter = () => { 
        display.addEventListener("keyup",e=> {  
            if(e.keyCode == 13) { 
              this.realizaConta();
            }
        });
    }
    this.apagaUm = () => {
        display.value = display.value.slice(0, -1);
      }
    this.realizaConta = () =>  { 
        let conta = display.value;
        try { 
            conta = eval(conta);
            if (!conta) { 
                alert('Conta inválida');
                return;
            }
            display.value = String(conta);
        } catch(e) { 
            alert('Conta Inválida');
            return;
        }
    }


    this.cliqueBotoes = () => {
      document.addEventListener(
        "click",
        e=>{
          const el = e.target;
          if (el.classList.contains("btn-num")) {
            this.btnParaDisplay(el.innerText);
         
          }
          if(el.classList.contains("btn-clear")) { 
              this.clearDisplay();
          }
          if(el.classList.contains("btn-del")) { 
            this.apagaUm();
        }
        if(el.classList.contains("btn-eq")) { 
            this.realizaConta();
        }
        }
      );
    }
    this.btnParaDisplay = valor => {
      display.value += valor;
      display.focus();
    }
  };


const calculadora = new Calculadora();
calculadora.inicia();
