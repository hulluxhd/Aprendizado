package PooCheck2;

import java.time.LocalDateTime;
import java.util.Scanner;

public abstract class Pessoa {
    //Atributos
    String nome;
    int idade;
    String cpf;
    String endereco;
    LocalDateTime horario_dataEntrada;
    LocalDateTime horario_dataSaida;

    //Construtor
    public Pessoa( String nome, int idade, String cpf, String endereco){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.endereco = endereco;
    }

//Setters e Getters


    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public LocalDateTime getHorario_dataEntrada() {
        return horario_dataEntrada;
    }

    public void setHorario_dataEntrada(LocalDateTime horario_dataEntrada) {
        this.horario_dataEntrada = horario_dataEntrada;
    }

    public LocalDateTime getHorario_dataSaida() {
        return horario_dataSaida;
    }

    public void setHorario_dataSaida(LocalDateTime horario_dataSaida) {
        this.horario_dataSaida = horario_dataSaida;
    }


    //Metodos



    public static void Entrar(){
        System.out.println("Entrou");
    }
    public static void Sair(){
        System.out.println("Saiu");
    }


}
