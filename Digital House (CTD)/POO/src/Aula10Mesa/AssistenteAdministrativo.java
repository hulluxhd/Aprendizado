package Aula10Mesa;

public class AssistenteAdministrativo extends Assistente {
    private boolean turno;

    public AssistenteAdministrativo(String nome, double salario, int numero, String matricula, boolean turno) {
        super(nome, salario, numero, matricula);
        this.turno = turno;
    }

    @Override
    public void salarioDoMes() {
        if (this.turno){
            super.setSalario(super.getSalario() * 1.15);
        } else
            super.getSalario();
        System.out.println(getSalario());
    }
}
