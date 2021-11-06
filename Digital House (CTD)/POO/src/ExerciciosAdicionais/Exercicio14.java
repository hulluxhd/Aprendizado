package ExerciciosAdicionais;

import java.util.Scanner;

public class Exercicio14 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Qual é o seu nome? ");
        String nome = scan.nextLine().toUpperCase();
        char[] arrayNome = new char[nome.length()];

        for (int i = 0; i < nome.length(); i++){
            arrayNome[i] = nome.charAt(nome.length() - (i + 1));
        }

        System.out.println(arrayNome);

    }
}
