package CheckpointPokemon;

public class Main {
    public static void main(String[] args) {
        // Elementos
        Elemento fogo = new Elemento("Fogo");
        Elemento grama = new Elemento("Grama");
        Elemento agua = new Elemento("Água");
        Elemento normal = new Elemento("Normal");

        // Moves (ações)
        Move arranhar = new Move("Arranhar", 20, normal);
        Move bafoDePimenta = new Move("Bafo de Pimenta", 35, fogo);

        // Pokémon
        Charmander chacha = new Charmander(4, "Charmander", "Chacha", 1, 10, 10, 10, fogo);
        Squirtle tortuguita = new Squirtle(7, "Squirtle", "Tortuguita", 5, 17, 20, 5, agua);
        Bulbasaur sauron = new Bulbasaur(1, "Bulbasaur", "Sauron", 5, 17, 20, 5, grama);

        // Adicionando Moves aos pokémons
        chacha.addMove(arranhar);
        chacha.addMove(bafoDePimenta);


        // Listando as ações possíveis para chacha (Charmander)
        chacha.listarMoves();

        // Subindo de Nível
        chacha.subirNivel();
        chacha.subirNivel();
        chacha.subirNivel();


        // Revela o método toString
        System.out.println(chacha);

        /*---------------------------------------------------------------------------------------------------------*/

        // Instancia de Treinadores

        // Jogador Principal
        JogadorPrincipal yanaMendes = new JogadorPrincipal("Yana", 'F', chacha, 5);
        System.out.println(yanaMendes);

        // Líder de ginásio
        LiderDeGinasio misty = new LiderDeGinasio("Misty", 'F', tortuguita, agua, "Cerulean");
        System.out.println(misty);

        // Testando os métodos dos Treinadores (Yana)
        yanaMendes.fugir();
        yanaMendes.lutar(arranhar);
        yanaMendes.trocarPokemon(sauron);

        // Número de insígnias (antes)
        System.out.println("Número de Insígnias: " + yanaMendes.getNumeroDeinsignias());

        // Utilizando o método darInsginia do treinador que é
        // líder de ginário: Misty deu uma Insígnia para a Yana
        misty.darInsignia(yanaMendes);

        // Número de insígnias (depois)
        System.out.println("Número de Insígnias: " + yanaMendes.getNumeroDeinsignias());
    }
}
