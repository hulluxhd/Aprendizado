package Aula11ExercicioMesa;

public class Cavalo extends Animal{

    public Cavalo(String nome, int idade) {
        super(nome, idade);
    }

    @Override
    public void emitirSom() {
        System.out.println("(SOM DE CABALO)");
    }

    public void correr(){
        System.out.println("CORRENDO");
    }
}
