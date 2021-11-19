package Aula10Nave;

public class Asteroid extends Objeto{
    private int danos;

    public Asteroid(int x, int y, char direcao, int danos){
        super(x, y, direcao);
        this.danos = danos;
    }

    @Override
    public void irA(int posx, int posy, char direcao) {
        System.out.println("Indo para a posição (" + posx + ", " + posy + "), direção " + direcao);
    }
}
