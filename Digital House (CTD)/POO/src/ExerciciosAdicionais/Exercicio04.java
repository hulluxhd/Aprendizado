package ExerciciosAdicionais;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Scanner;

public class Exercicio04 {
    public static void main(String[] args) {


        //a) "Telefonou para a vítima?"
        //b) "Esteve no local do crime?"
        //c) "Mora perto da vítima?"
        //d) "Devia para a vítima?"
        //e) "Já trabalhou com a vítima?"
        int j = 0;
        boolean telefonou;
        boolean esteveLocal;
        boolean moraPerto;
        boolean deviaVitima;
        boolean trabalhouVitima;

        Scanner scan = new Scanner(System.in);
        System.out.println("Telefonou? ");
        telefonou = scan.nextBoolean();
        if(telefonou){
            j ++;}
        System.out.println("Esteve no local? ");
        esteveLocal = scan.nextBoolean();
        if(esteveLocal)
            j++;
        System.out.println("Mora perto?");
        moraPerto = scan.nextBoolean();
        if(moraPerto)
            j++;
        System.out.println("Devia a vitima?");
        deviaVitima = scan.nextBoolean();
        if(deviaVitima)
            j++;
        System.out.println("Trabalhou com a vítima?");
        trabalhouVitima= scan.nextBoolean();
        if(trabalhouVitima)
            j++;
        System.out.println("A pessoa é: ");
        if(j == 2){
            System.out.println("Suspeita");
        } else if(j > 2 && j <= 4){
            System.out.println("Cúmplice");
        } else if(j == 5){
            System.out.println("Assassino");
        } else
            System.out.println("Inocente");



    }
}
