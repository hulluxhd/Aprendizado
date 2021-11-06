package aula03;

import java.util.Scanner;

public class ex03 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String nome;
        String sobrenome;
        char ini1;
        char ini2;
        int d1;
        int d2;
        int d3;

        System.out.println("Qual seu nome? ");
        nome = scanner.nextLine();
        System.out.println("Sobrenome? ");
        sobrenome = scanner.nextLine();
        System.out.println("Dia de nascimento? ");
        d1 = scanner.nextInt();
        System.out.println("Mês? ");
        d2 = scanner.nextInt();
        System.out.println("Ano? ");
        d3 = scanner.nextInt();
        ini1 = nome.charAt(0);
        ini2 = sobrenome.charAt(0);

        System.out.println("Seu nome é " + nome + ", seu sobrenome é " + sobrenome + ". \nSua data de nascimento é " + d1 + "/" + d2 + "/" + d3 + ". Suas iniciais são: " + ini1 + ini2);



    }
}
