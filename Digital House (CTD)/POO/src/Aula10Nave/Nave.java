package Aula10Nave;

public class Nave extends Objeto {
    private double velocidade;
    private int vida;

    public Nave(int x, int y, char direcao, double velocidade){
        super(x, y, direcao);
        this.velocidade = velocidade;
    }

    @Override
    public void irA(int posx, int posy, char direcao) {
        System.out.println("Indo para a posição (" + posx + ", " + posy + "), direção " + direcao);
    }

    public void girar(char direcao){
        System.out.println("Virou para a '" + direcao + "'");
    }

    public void restaVida(int valor){
        System.out.println("Vida restante: " + valor);
    }

    public double getVelocidade() {
        return velocidade;
    }

    public void setVelocidade(double velocidade) {
        this.velocidade = velocidade;
    }

    public int getVida() {
        return vida;
    }

    public void setVida(int vida) {
        this.vida = vida;
    }
}
