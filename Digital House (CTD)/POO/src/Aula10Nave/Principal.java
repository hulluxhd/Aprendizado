package Aula10Nave;

public class Principal {
    public static void main(String[] args) {
        Nave nave = new Nave(2, 1, 'N', 3);
        Asteroid asteroid = new Asteroid(4, 5, 'S', 5);
        //System.out.println(nave.getVelocidade());
        //System.out.println(nave.getPosx());
        System.out.println(nave.getVelocidade());
        //System.out.println(nave.getPosy());
        nave.irA(4, 2, 'S');
        nave.restaVida(10);
        asteroid.irA(2, 1, 'N');
    }
}
