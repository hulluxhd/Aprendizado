package Aula10Mesa;

public abstract class Funcionario {
    private String nome;
    private double salario;

    public Funcionario(String nome, double salario) {
        this.nome = nome;
        this.salario = salario;
    }

    public void addAumento(double valor){
        this.salario += valor;
        System.out.println("Novo Salário R$" + this.salario);
    }

    public void ganhoAnual(){
        System.out.println("Ganho anual de R$" + this.salario*12);
    }

    @Override
    public String toString() {
        return "Funcionario{" +
                "nome='" + nome + '\'' +
                ", salario=" + salario +
                '}';
    }

    public void exibeDados(){
        System.out.println(this.toString());
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }
}
