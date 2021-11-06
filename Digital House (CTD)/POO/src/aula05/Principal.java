package aula05;

public class Principal {
    public static void main(String[] args) {
        Cliente c = new Cliente(232, "Denny");
        System.out.println(c.getNome());
        c.aumentarDivida(199);
        c.pagarDivida(10);
        System.out.println(c.getDivida());
        c.pagarDivida(189);
        c.pagarDivida(1);


    }
}
