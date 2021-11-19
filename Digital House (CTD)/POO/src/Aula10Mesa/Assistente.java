package Aula10Mesa;

public class Assistente extends Funcionario{
    private int numero;
    private String matricula;

    public Assistente(String nome, double salario, int numero, String matricula) {
        super(nome, salario);
        this.numero = numero;
        this.matricula = matricula;
    }

    @Override
    public String toString() {
        return "Assistente{" +
                "numero=" + numero +
                ", matricula='" + matricula + '\'' +
                '}';
    }

    @Override
    public void exibeDados() {
        System.out.println(this.toString());
    }

    public void salarioDoMes(){
        this.getSalario();
    }
}
