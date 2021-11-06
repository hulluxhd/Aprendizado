package aula05;

public class Jogo {
    public static void main(String[] args) {
        UsuarioJogo j1 = new UsuarioJogo("Denny", "Hullux");
        UsuarioJogo j2 = new UsuarioJogo("Joyce", "Gatinha");
        UsuarioJogo j3 = new UsuarioJogo("Thulio", "Pirocóptero");
        j1.subirNivel();
        j1.bonus(2);
        System.out.println(j1.getNome());
        System.out.println(j1.getNickname());
        System.out.println("Está no nível "+j1.getNivel());
        System.out.println("Pontuação: "+j1.getPontuacao());
        j3.subirNivel();
        j3.bonus(6);
        j3.subirNivel();
        System.out.println(j3.getNome());
        System.out.println(j3.getNickname());
        System.out.println("Está no nível "+j3.getNivel());
        System.out.println("Pontuação: "+j3.getPontuacao());

    }
}
