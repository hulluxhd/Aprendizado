package Aula10;

public class Associado {
    private String numAssociado;
    private String nome;
    private double valorMensal;
    private String atividade;



    public Associado(String numero, String nome, String atividade, double valor){
        this.numAssociado = numero;
        this.nome = nome;
        this.atividade = atividade;
        this.valorMensal = valor;
    }

    public double custoMensal(){
        return this.valorMensal;
    }

    @Override
    public String toString() {
        return "Associado {" +
                "numAssociado='" + numAssociado + '\'' +
                ", nome='" + nome + '\'' +
                ", valorMensal=" + valorMensal +
                ", atividade='" + atividade + '\'' +
                '}';
    }
}
