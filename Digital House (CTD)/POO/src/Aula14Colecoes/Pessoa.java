package Aula14Colecoes;

import java.util.ArrayList;
import java.util.Date;

public class Pessoa {
    private String nome;
    private String sobrenome;
    private int idade;
    private double saldoTotal = 0;
    Date data = new Date();
    ArrayList<Conta> contas = new ArrayList<Conta>();


    public Pessoa(String nome, String sobrenome, int idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    public String getNomeCompleto(){
        return this.nome + " " + this.sobrenome;
    }

    public boolean isAdult(){
        if ((data.getYear() - this.idade) >= 18){
            return true;
        } else {
            return false;
        }
    }

    public void addConta(Conta conta){
        this.contas.add(conta);
    }

    public void mostrarContas(){

        for (Conta conta: contas){
            System.out.println(conta.getNumConta());
        }
    }



    public double getSaldoTotal() {
        return saldoTotal;
    }

    public void setSaldoTotal(double saldoTotal) {
        this.saldoTotal = saldoTotal;
    }
}
