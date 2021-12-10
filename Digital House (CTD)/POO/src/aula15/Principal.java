package aula15;

public class Principal {
    public static void main(String[] args) {
        Aluno aluno1 = new Aluno("Denny", "Ribeiro", "384190");
        Parcial exame1 = new Parcial(aluno1, "Econometria", 2, 1);
        System.out.println(exame1.getNota());
        System.out.println(exame1.isApproved());
        exame1.recuperar(2.5);
        System.out.println(exame1.getNota());
        exame1.recuperar(3);
        exame1.recuperar(3.5);
        exame1.recuperar(4);
        System.out.println(exame1.isApproved());
        System.out.println(exame1.getNota());
        System.out.println(exame1.getContador());

    }
}
