package ExerciciosAdicionais;

import java.util.Scanner;

public class Exercicio05 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String tipo;
        float litros;
        System.out.println("Tipo de combustível? [A] álcool | [G] gasolina");
        tipo = scan.nextLine();
        System.out.println("Litros abastecidos?");
        litros = scan.nextInt();
        if (tipo.equals("A")) {
            if (litros <= 20) {
                System.out.println("O total abastecido foi de " + litros + " litros. O valor, com desconto, é de R$" + litros * 1.90 * 0.97);
            } else
                System.out.println("O total abastecido foi de " + litros + " litros. O valor, com desconto, é de R$" + litros * 1.90 * 0.95);
        }
        if(tipo.equals("B")){
            if(litros <= 20)
                System.out.println("O total abastecido foi de " + litros + " litros. O valor, com desconto, é de R$" + litros * 2.50 * 0.96);
        }   else
                System.out.println("O total abastecido foi de " + litros + " litros. O valor, com desconto, é de R$" + litros * 2.50 * 0.94);

    }
}
