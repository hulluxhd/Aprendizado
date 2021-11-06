package ExerciciosAdicionais;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio09 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        scan.useLocale(Locale.US);
        float temp1 = 0;
        float temp2;
        int i = 1;
        float soma = 0;
        float menor;
        float maior ;
        boolean decisao;
        System.out.println("Digite o primeiro registro: ");
        temp2 = scan.nextFloat();
        menor = temp2;
        maior = temp2;
        while(true){
            System.out.println("Adicionar mais um registro? true of false");
            decisao = scan.nextBoolean();
            if (!decisao) {
                break;
            }
            temp1 = scan.nextFloat();
            if (temp1 > maior){
                maior = temp1;
            } else if (temp1 < menor){
                menor = temp1;
            }
            soma += temp1;
            i++;

        }
        System.out.println("A maior temperatura foi de " + maior + "°C. Já a menor, foi de " + menor + "°C e a média entre todas foi de " + soma/i + "°C");



    }
}
