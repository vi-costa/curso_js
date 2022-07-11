class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  sequencia() {
    return this.cpfLimpo.chartAt(0).repeat(11) === this.cpfLimpo;
  }
  gerarNovoCpf(){
    const cpfSemDigitos = this.cpfLimpo.slice(0,-2);
    const digito1 = this.geraDigito(cpfSemDigitos);
  }
  geraDigito(cpfSemDigitos){
    let total = 0;
    let reverso = cpfSemDigitos.length+1;
    for(let stringNumerica of cpfSemDigitos){

    }
  }
  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if(this.sequencia()) return false;
    this.gerarNovoCpf();
    return this.novoCPF === this.cpfLimpo;
  }
}
const validaCpf = new ValidaCPF("070.987.720-03");
console.log(validaCpf);
