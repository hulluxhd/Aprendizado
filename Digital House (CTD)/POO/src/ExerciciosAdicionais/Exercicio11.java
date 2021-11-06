package ExerciciosAdicionais;

import java.util.Scanner;

public class Exercicio11 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Qual número para a tabuada? ");
        int numero = scan.nextInt();
        for(int i = 1; i <= 10; i++){
            System.out.println(i + " X " + numero + " = " + i*numero);
        }
    }
}
