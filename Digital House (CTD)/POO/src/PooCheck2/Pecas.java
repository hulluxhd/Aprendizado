package PooCheck2;

import java.text.DecimalFormat;
import java.util.Scanner;

public class Pecas {
    //Atributos
    int codigo;
    float valor;
    int quantidade;
    //Construtor
    public Pecas(int codigo, float valor, int quantidade) {
        this.codigo = codigo;
        this.valor = valor;
        this.quantidade = quantidade;
    }
    //Getter e Setter
    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }


    public void setValor(float valor) {
        this.valor = valor;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }
    //Metodos

    public void CadastrarNova(){


        //criando Scanner
        Scanner scanLinha = new Scanner(System.in);
        System.out.println("Digite o codigo: ");
        int salvarCodigo = Integer.parseInt(scanLinha.nextLine());
        System.out.println("Digite o valor: ");
        float salvarValor = Float.parseFloat(scanLinha.nextLine());
        System.out.println("Digite a Quantidade: ");
        int salvaQuanti = Integer.parseInt(scanLinha.nextLine());

        Pecas pecaCadastrada = new Pecas(salvarCodigo,salvarValor,salvaQuanti);
        System.out.println("Peça Cadastrada com sucesso");

    }



}
