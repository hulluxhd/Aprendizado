package aula03;

import java.util.Scanner;

public class ex02 {

    static void moduloDivisao(int n1, int n2){
        System.out.println(n1%n2 == 0);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite o valor 1 e 2 em sequência: ");
        int n1 = scanner.nextInt();
        int n2 = scanner.nextInt();
        moduloDivisao(n1,n2);
    }
}
