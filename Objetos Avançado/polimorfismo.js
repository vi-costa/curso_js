


function Conta (agencia,conta,saldo) { 
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo<valor){
        console.log(
            'Saldo insuficiente, digite um valor de saque menor.');
        return;
    }

    this.saldo -= valor;
    console.log('Saldo após o saque: ');
    this.verSaldo();
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    console.log('Saldo após o depósito: ')
    this.verSaldo();
 
}
Conta.prototype.verSaldo = function() { 
    console.log(
        `Ag/c: ${this.agencia}/${this.conta}`,
        '\nSaldo: R$'+this.saldo +'\n');
}

const conta1 = new Conta(11,22,500);
conta1.verSaldo();
conta1.depositar(150);
conta1.sacar(200);
