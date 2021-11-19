package Aula11ExercicioMesa;

public class Cachorro extends Animal{


    public Cachorro(String nome, int idade) {
        super(nome, idade);
    }

    @Override
    public void emitirSom() {
        System.out.println("(SOM DE CACHORRO)");
    }

    public void correr(){
        System.out.println("CORRENDO...");
    }
}
