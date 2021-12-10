package Aula14Colecoes;

public class Principal {
    public static void main(String[] args) {

        Conta conta1 = new Conta(001, 200);
        Conta conta2 = new Conta(002, 300);
        Pessoa denny = new Pessoa("Denny", "Ribeiro", 25);
        denny.addConta(conta1);
        denny.addConta(conta2);
        denny.getNomeCompleto();
        System.out.println(denny.isAdult());
        denny.mostrarContas();
        System.out.println(denny.getNomeCompleto());

    }
}
