package aula03;

import java.util.Scanner;

public class ex4q2 {
    public static void maiorNumero(int a, int b, int c){
        int maior = 0;
        if(a > maior){
            maior = a;
        }
        if(b > maior){
            maior = b;
        }
        if (c > maior){
            maior = c;
        }
        System.out.println(maior);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n1;
        int n2;
        int n3;
        n1 = scanner.nextInt();
        n2 = scanner.nextInt();
        n3 = scanner.nextInt();
        maiorNumero(n1, n2, n3);

    }
}
