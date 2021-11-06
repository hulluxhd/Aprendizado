package ExerciciosAdicionais;

import java.lang.reflect.Array;
import java.util.Scanner;

public class Exercicio13 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Digite uma frase aqui:");
        String teste = scan.nextLine().toUpperCase();
        int contador = 0;
        int contadorVazio=0;
        char[] arra = new char[teste.length()];
        for(int i = 0; i < teste.length(); i++){
            arra[i] = teste.charAt(i);
            if (arra[i] == 'E' || arra[i] == 'A' || arra[i] == 'I' || arra[i] == 'O' || arra[i] == 'U'){
                contador++;
            }
            if (arra[i] == ' '){
                contadorVazio++;
            }
        }
        System.out.println("Total de vogais: "+contador);
        System.out.println("Total de espaços vazios: " + contadorVazio);

    }
}
