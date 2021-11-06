package aula06;

import java.util.Calendar;
import java.util.Date;

public class AdocaoCachorros {
    private String nomeId;
    private boolean estaApto;
    private String raca;
    private Calendar anoNascimento;
    private float peso;
    private boolean possuiChip;
    private boolean estaFerido;
    private Calendar anoAtual = Calendar.getInstance();
    private int idade;

    //Construtor
    public AdocaoCachorros(String nome, String raca, Calendar anoNascimento, float peso, boolean possuiChip, boolean estaFerido){
        this.nomeId = nome;
        this.raca = raca;
        this.anoNascimento = anoNascimento;
        this.peso = peso;
        this.possuiChip = possuiChip;
        this.estaFerido = estaFerido;
        this.idade = (int)(anoAtual.get(Calendar.YEAR) - anoNascimento.get(Calendar.YEAR));
    }
    public void idadeChip(){
        if(this.possuiChip)
            System.out.println("O animal tem "+  (int)(this.anoNascimento.get(Calendar.YEAR) - this.anoAtual.get(Calendar.YEAR)) + " anos e possui chip" );
        else
            System.out.println("O animal não tem chip.");
    }

    public boolean encaminhadoAdocao(){
        return !this.estaFerido && this.peso > 5;
    }

    public String getNomeId() {
        return nomeId;
    }

    public void setNomeId(String nomeId) {
        this.nomeId = nomeId;
    }

    public boolean isEstaApto() {
        return estaApto;
    }

    public void setEstaApto(boolean estaApto) {
        this.estaApto = estaApto;
    }

    public String getRaca() {
        return raca;
    }

    public void setRaca(String raca) {
        this.raca = raca;
    }

    public Calendar getAnoNascimento() {
        return anoNascimento;
    }

    public void setAnoNascimento(Calendar anoNascimento) {
        this.anoNascimento = anoNascimento;
    }

    public float getPeso() {
        return peso;
    }

    public void setPeso(float peso) {
        this.peso = peso;
    }

    public boolean isPossuiChip() {
        return possuiChip;
    }

    public void setPossuiChip(boolean possuiChip) {
        this.possuiChip = possuiChip;
    }

    public boolean isEstaFerido() {
        return estaFerido;
    }

    public void setEstaFerido(boolean estaFerido) {
        this.estaFerido = estaFerido;
    }

    public Calendar getAnoAtual() {
        return anoAtual;
    }

    public void setAnoAtual(Calendar anoAtual) {
        this.anoAtual = anoAtual;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }
}
