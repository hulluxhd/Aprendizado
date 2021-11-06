package ExerciciosAdicionais;

import java.util.Scanner;

public class Exercicio10 {
    public static void main(String[] args) {
        float nota = -1;
        Scanner scan = new Scanner(System.in);
        while (nota < 0 || nota > 10){
            System.out.println("Digite uma nota entre 0 e 10");
            nota = scan.nextFloat();
        }
    }
}
