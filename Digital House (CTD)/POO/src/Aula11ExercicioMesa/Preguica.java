package Aula11ExercicioMesa;

public class Preguica extends Animal{
    public Preguica(String nome, int idade) {
        super(nome, idade);
    }

    @Override
    public void emitirSom() {
        System.out.println("(SOM DE PREGUIÇA)");
    }

    public void subirArvores(){
        System.out.println("SUBINDO EM ÁRVORE");
    }
}
