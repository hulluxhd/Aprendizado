package Aula10Mesa;

public class AssistenteTecnico extends Assistente{
    private double bonus;
    // true = noite | false = dia


    //Construtor
    public AssistenteTecnico(String nome, double salario, double bonus, int numero, String matricula) {
        super(nome, salario, numero, matricula);
        this.bonus = bonus;
    }
    public void salarioDoMes(){
        this.setSalario(getSalario()+this.bonus);
        System.out.println(getSalario());
    }

}
