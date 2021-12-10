package Aula15Mesa;


import java.util.Calendar;

public abstract class Embarcacao {
    private Capitao capitao;
    private double precoBase;
    private double adicional;
    private int anoFabricacao;
    private double comprimento;

    public Embarcacao(Capitao capitao, double precoBase, double adicional, int anoFabricacao, double comprimento) {
        this.capitao = capitao;
        this.precoBase = precoBase;
        this.adicional = adicional;
        this.anoFabricacao = anoFabricacao;
        this.comprimento = comprimento;
    }

    public double valorAluguel(){
        if (anoFabricacao > 2020){
            return (precoBase * 0.01) + adicional;
        } else{
            return precoBase * 0.01;
        }
    }

}
