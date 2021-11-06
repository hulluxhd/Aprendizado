package ExerciciosAdicionais;

import java.util.Scanner;

public class Exercicio07 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite seu salário ");
        float salario = scan.nextFloat();
        System.out.println("Seu salário atual é de R$" + salario);
        if(salario <= 280)
            salario += salario* 0.2;
        else if (salario <=700)
            salario += salario*0.15;
        else if (salario <= 1500)
            salario += salario*0.1;
        else
            salario += salario*0.05;

        System.out.println("Seu salário após o reajuste passa a ser de R$"+salario);
        }

    }

