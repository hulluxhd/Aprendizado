package Aula11Atividade01;

public class ContaPoupanca extends Conta{
    private double taxaDeJuros;

    public ContaPoupanca(double saldo, Cliente cliente, double juros){
        super(saldo, cliente);
        this.taxaDeJuros = juros;
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

    public void cobrarJuros(){
        super.saldo *= (1+this.taxaDeJuros);
        System.out.println("Seu saldo agora é de R$" + super.saldo);
    }
}
