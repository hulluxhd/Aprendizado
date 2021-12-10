package CheckpointPokemon;

public class Move {

    // Esta é a classe que gera novos tipos de "ações" possíveis, a serem executadas
    // pelos pokémons


    private String nome;
    private int poderATK;
    private Elemento tipo;

    public Move(String nome, int poderATK, Elemento tipo) {
        this.nome = nome;
        this.poderATK = poderATK;
        this.tipo = tipo;
    }



    // getters and setters
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getPoderATK() {
        return poderATK;
    }

    public void setPoderATK(int poderATK) {
        this.poderATK = poderATK;
    }

    public Elemento getTipo() {
        return tipo;
    }

    public void setTipo(Elemento tipo) {
        this.tipo = tipo;
    }
}
