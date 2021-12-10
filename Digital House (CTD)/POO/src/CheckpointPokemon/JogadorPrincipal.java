package CheckpointPokemon;

public class JogadorPrincipal extends Treinador{

    // A classe de Jogador Principal se refere ao jogador humano, aquele que está
    // a jogar

    // O número de insígnias informa a quantidade de insígnias de ginásio
    // o jogador principal já obteve
    private int numeroDeinsignias;

    public JogadorPrincipal(String nome, char genero, Pokemon pokemonEscolhido, int numeroDeinsignias) {
        super(nome, genero, pokemonEscolhido);
        this.numeroDeinsignias = numeroDeinsignias;
    }


    // getters and setters

    public int getNumeroDeinsignias() {
        return numeroDeinsignias;
    }

    public void setNumeroDeinsignias(int numeroDeinsignias) {
        this.numeroDeinsignias = numeroDeinsignias;
    }
}