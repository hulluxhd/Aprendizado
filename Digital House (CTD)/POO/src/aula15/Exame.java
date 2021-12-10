package aula15;

public abstract class Exame {
    private Aluno aluno;
    private String titulo;
    private double nota;

    public Exame(Aluno aluno, String titulo, double nota) {
        this.aluno = this.aluno;
        this.titulo = titulo;
        this.nota = nota;
    }

    public boolean isApproved(){
        if (this.nota >= 4){
            return true;
        } else{
            return false;
        }
    }


    public double getNota() {
        return nota;
    }

    public void setNota(double nota) {
        this.nota = nota;
    }
}
