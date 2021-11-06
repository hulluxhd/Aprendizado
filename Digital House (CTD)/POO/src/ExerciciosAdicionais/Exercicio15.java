package ExerciciosAdicionais;

import java.util.Scanner;

public class Exercicio15 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Quantas horas você trabalha no mês? ");
        int horas = scan.nextInt();
        System.out.println("Quanto vale a sua hora de trabalho em reais? ");
        int valor = scan.nextInt();

        System.out.println("Você trabalha " + horas + " por mês e recebe R$" + valor*horas + " por mês");
    }
}
