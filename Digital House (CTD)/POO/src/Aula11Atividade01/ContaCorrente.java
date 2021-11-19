package Aula11Atividade01;

public class ContaCorrente extends Conta{
    public ContaCorrente(double saldo, Cliente cliente) {
        super(saldo, cliente);
    }
    public void exibirCliente(){
        System.out.println(this.cliente.toString());
    }


    @Override
    public void sacar(double valor) {

        if (valor <= super.saldo){
            super.saldo -= valor;
            System.out.println("Novo saldo: R$"+super.saldo);
        } else
            System.out.println("Fundos insuficientes");
    }


    @Override
    public void depositar(double valor) {
        super.saldo += valor;
    }

    @Override
    public void consultarSaldo() {
        System.out.println("Seu saldo atual é de R$" + super.saldo);
    }

    public void depositarCheque(double valor, String banco, int dataPagamento){
        super.saldo += valor;
    }
}
