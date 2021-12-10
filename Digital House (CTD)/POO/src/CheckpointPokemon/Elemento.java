package CheckpointPokemon;

public class Elemento {

    // Os elementos são únicos, e cada pokémon deve ter um tipo, por isso, deve-se
    // instanciar todos os tipos possíveis (em uma aplicação real)


    String nome;

    public Elemento(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
