package ExerciciosAdicionais;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio03 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        scan.useLocale(Locale.US);
        float area;
        float totalTinta;
        float totalLatas;
        area = scan.nextFloat();
        totalTinta = area/3;
        totalLatas = (int) totalTinta/18 + 1;
        System.out.println("O total de tinta utilizada foi de " + totalTinta + " litros. O total de latas de tinta utilizdo foi de " + totalLatas+ " latas e o valor total gasto foi de R$" + totalLatas*80);

    }
}
