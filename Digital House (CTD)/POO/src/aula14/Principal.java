package aula14;

public class Principal {
    public static void main(String[] args) {
        Jogador jogador1 = new Jogador(10, true, false, "Denny");
        Jogador jogador2 = new Jogador(17, false, true, "arra");
        Jogador jogador3 = new Jogador(15, true, false, "tetste");
        Jogador jogador4 = new Jogador(14, true, true, "teste");

        Equipe equipe = new Equipe("Equipe1");

        //equipe.getQuantidadeJogadoresLesionados();
    }
}
