package Aula11Atividade01;

public class Principal {
    public static void main(String[] args) {
        Cliente cliente1 = new Cliente("01", "Denny Ribeiro", "00000000000", "1111111111");
        ContaPoupanca contaPoupancaCliente1 = new ContaPoupanca(500.5, cliente1, 0.02);
        ContaCorrente contaCorrenteCliente2 = new ContaCorrente(1, cliente1);
        contaPoupancaCliente1.consultarSaldo();
        contaCorrenteCliente2.consultarSaldo();

    }
}
