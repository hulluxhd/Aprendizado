package PooCheck2;

import java.util.ArrayList;
import java.util.Objects;
import java.util.Scanner;

public class Cliente extends Pessoa implements CadastrarCliente {
    public String historicoDeOrcamentos;


    private ArrayList<Cliente> cadastrados = new ArrayList();

    //Construtor Herdado
    public Cliente(String nome, int idade, String cpf, String endereco, String historicoDeOrcamentos) {
        super(nome, idade, cpf, endereco);

        this.historicoDeOrcamentos = historicoDeOrcamentos;
    }

    //Metodos
    public String Orcar() {
        return "Orcei";

    }


    @Override
    public void CadastrarCliente(Cliente clienteCadastrado) {
        cadastrados.add(clienteCadastrado);
        System.out.println(cadastrados.get(0));
    }



}










