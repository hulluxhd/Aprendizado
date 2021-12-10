package CheckpointPokemon;

public abstract class Treinador {

    // Treinador é a classe pai, abstrata, que define os atributos dos treinadores.

    private String nome;
    private char genero;

    // O atributo de pokemonEscolhido se refere ao pokemon que está "selecionado"
    private Pokemon pokemonEscolhido;

    public Treinador(String nome, char genero, Pokemon pokemonEscolhido) {
        this.nome = nome;
        this.genero = genero;
        this.pokemonEscolhido = pokemonEscolhido;
    }

    // getters and setters
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public char getGenero() {
        return genero;
    }

    public void setGenero(char genero) {
        this.genero = genero;
    }

    // Método para "batalhar" utilizando um move, ou ação

    public void lutar(Move move){
        System.out.println("Usou " + move.getNome());
    }

    // Método que faz a troca de pokémon selecionado
    public void trocarPokemon(Pokemon pokemon){
        this.pokemonEscolhido = pokemon;
        System.out.println("Pokémon ativo: " + pokemonEscolhido.getNome());
    }

    // Método para fugir da batalha. Retorna um void com uma mensagem de fuga
    // e não realiza nenhuma outra ação
    public void fugir(){
        System.out.println(this.getNome() + " fugiu da batalha...");
    }

    @Override
    public String toString() {
        return  "nome='" + nome + '\'' +
                ", genero=" + genero +
                ", pokemonEscolhido=" + pokemonEscolhido.getApelido();
    }
}