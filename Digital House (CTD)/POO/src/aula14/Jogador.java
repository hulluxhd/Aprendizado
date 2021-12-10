package aula14;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

public class Jogador implements Comparable<Jogador>{
    private int numCamisa;
    private boolean lesionado;
    private boolean titular;
    private String nome;


    public Jogador(int numCamisa, boolean lesionado, boolean titular, String nome) {
        this.numCamisa = numCamisa;
        this.lesionado = lesionado;
        this.titular = titular;
        this.nome = nome;
    }


    @Override
    public int compareTo(Jogador o) {
        if(o.numCamisa == this.numCamisa){
            return 0;
        } else if(o.numCamisa < this.numCamisa){
            return 1;
        } else
            return -1;
    }

    public int getNumCamisa() {
        return numCamisa;
    }

    public void setNumCamisa(int numCamisa) {
        this.numCamisa = numCamisa;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public boolean isLesionado() {
        return lesionado;
    }

    public void setLesionado(boolean lesionado) {
        this.lesionado = lesionado;
    }

    public boolean isTitular() {
        return titular;
    }

    public void setTitular(boolean titular) {
        this.titular = titular;
    }
}



