package Aula15Mesa;

public class Iate extends Embarcacao implements Comparable<Iate>{
    private int cabines;

    public Iate(Capitao capitao, double precoBase, double adicional, int anoFabricacao, double comprimento, int cabines) {
        super(capitao, precoBase, adicional, anoFabricacao, comprimento);
        this.cabines = cabines;
    }

    @Override
    public int compareTo(Iate o) {
        if (this.cabines == o.cabines){
            return 0;
        } else if (this.cabines > o.cabines){
            return 1;
        } else {
            return -1;
        }
    }
}
