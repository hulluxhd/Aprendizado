package ExerciciosAdicionais;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio02 {
    public static void main(String[] args) {
        float peso;
        float excesso = 0;
        float multa = 0;
        Scanner scan = new Scanner(System.in);
        scan.useLocale(Locale.US);
        System.out.println("Digite o pescado do dia: ");
        peso = scan.nextFloat();
        if(peso > 50){
            excesso += peso - 50;
            multa = excesso * 4;
            System.out.println("O excesso de kilos foi de " + excesso + "kg e a multa correspondente é de R$" + multa + ".");
        } else
            System.out.println("Não houve excesso.");
    }
}
