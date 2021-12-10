package Aula15Mesa;

import java.util.ArrayList;

public class Veleiro extends Embarcacao{
    private int mastros;

    public Veleiro(Capitao capitao, double precoBase, double adicional, int anoFabricacao, double comprimento, int mastros) {
        super(capitao, precoBase, adicional, anoFabricacao, comprimento);
        this.mastros = mastros;
    }


    public boolean isBig(){
        if (this.mastros > 4){
            return true;
        } else {
            return false;
        }
    }
}
