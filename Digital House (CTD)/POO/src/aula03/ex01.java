package aula03;

import java.util.Scanner;

public class ex01 {
    public static void main(String[] args) {
        String nome;
        String sobrenome;
        char ini1;
        char ini2;
        Scanner scanner;

        scanner = new Scanner(System.in);
        System.out.println("Digite o nome: ");
        nome = scanner.nextLine();
        System.out.println("Digite o sobrenome: ");
        sobrenome = scanner.nextLine();
        ini1 = nome.charAt(0);
        ini2 = sobrenome.charAt(0);


        System.out.println("Olá, " + nome + "" + sobrenome + "!");
        System.out.println("Suas iniciais para reconhecimento serão " + ini1 + ini2);
    }
}
