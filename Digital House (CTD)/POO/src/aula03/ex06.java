package aula03;

import java.util.Scanner;

public class ex06 {
    public static  void quantosPacotes(){
        Scanner scanner = new Scanner(System.in);
        String nome;
        float qtd = 0;
        float soma = 0f;
        int pacotes = 0;

        System.out.println("Nome do animal? ");
        nome = scanner.nextLine();
        System.out.println("Quanto come por dia? ");
        qtd = scanner.nextFloat();
        System.out.println("Pacotes: ");

        while (soma < qtd){
            soma += scanner.nextFloat();
            pacotes++;
        }
        System.out.println("O nome do dog é " + nome + " e ele precisará de " + pacotes + " pacotes.");


    }
    public static void main(String[] args) {
        quantosPacotes();
    }
}
