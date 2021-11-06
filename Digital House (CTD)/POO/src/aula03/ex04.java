package aula03;

import java.util.Scanner;

public class ex04 {
    static void primo(int n){
        for(int i = 2; i < n; i++){
            if(n%i == 0){
                System.out.println("Não é primo!");
                break;
            } else {
                System.out.println("É primo!");
                break;
            }
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n;
        System.out.println("Digite um número: ");
        n = scanner.nextInt();
        primo(n);
    }
}
