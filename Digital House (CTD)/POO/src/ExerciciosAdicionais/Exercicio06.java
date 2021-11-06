package ExerciciosAdicionais;

import java.util.Scanner;

public class Exercicio06 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int qtdPessoas;
        int somaIdades = 0;
        System.out.println("Quantas pessoas? ");
        qtdPessoas = scan.nextInt();
        System.out.println("Digite as idades: ");
        for(int i = 1; i <= qtdPessoas; i++){
            System.out.println("Idade da pessoa " + i);
            somaIdades += scan.nextInt();
        }
        System.out.println("A média das idades foi de " + somaIdades/qtdPessoas);
        if(somaIdades/qtdPessoas <= 25){
            System.out.println("Turma jovem");
        } else if(somaIdades/qtdPessoas <= 60){
            System.out.println("Turma adulta");
        } else
            System.out.println("Turma idosa");
    }
}
