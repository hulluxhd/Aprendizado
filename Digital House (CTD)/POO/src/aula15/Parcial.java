package aula15;

public class Parcial extends Exame{
    private int unidade;
    private int contador = 0;
    public Parcial(Aluno aluno, String titulo, double nota, int unidade) {
        super(aluno, titulo, nota);
        this.unidade = unidade;
    }

    public void recuperar(double nota){
        if (this.unidade <= 3){
            if (this.contador < 3){
                contador++;
                super.setNota(nota);
            } else{
                System.out.println("Já atingiu o número máximo de tentativas. Repete a disciplina aí " + getContador());
            }
        } else{
            if (this.contador < 2){
                contador++;
                super.setNota(nota);
            } else {
                System.out.println("Já atingiu o número máximo de tentativas. Repete a disciplina aí " + getContador());
            }
        }
    }


    public int getContador() {
        return contador;
    }

    public void setContador(int contador) {
        this.contador = contador;
    }
}
