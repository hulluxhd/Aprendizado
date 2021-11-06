package ExerciciosAdicionais;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio01 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        float altura;
        scan.useLocale(Locale.US);
        altura = scan.nextFloat();
        System.out.println("Seu peso ideal é " + ((72.7f * altura) - 58) + "kg.");
    }
};

