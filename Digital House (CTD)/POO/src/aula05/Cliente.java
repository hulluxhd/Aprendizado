package aula05;

public class Cliente {
    private int numeroCliente;
    private String nome;
    private double divida;

    //Construtor
    public Cliente(int numero, String nome){
        this.divida = 0;
        this.nome = nome;
        this.numeroCliente = numero;
    }


    //Métodos
    public void aumentarDivida(double valor){
        this.divida += valor;
        System.out.println("Sua dívida agora é de: " + this.divida);
    }

    public void pagarDivida(double valor){
        if(this.divida == 0)
            System.out.println("Você não tem dívidas.");
        else if((this.divida - valor) < 0)
            System.out.println("O valor lhe deixaria com saldo negativo. Tente novamente. O valor total da sua dívida no momento é de R$" + this.divida);
        else
            this.divida -= valor;
    }

    //Getters e Setters

    public String getNome(){
        return this.nome;
    }

    public int getNumeroCliente(){
        return this.numeroCliente;
    }

    public double getDivida(){
        return this.divida;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public void setNumeroCliente(int numero){
        this.numeroCliente = numero;
    }

}
