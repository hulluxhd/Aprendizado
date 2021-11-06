package ExerciciosAdicionais;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio12 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        scan.useLocale(Locale.US);
        int codigo;
        int codigoBaixo = 0;
        int codigoAlto = 0;
        int codigoGordo = 0;
        int codigoLeve = 0;
        float altura;
        float peso;
        float maiorPeso = 0;
        float menorPeso = 1000;
        float maiorAltura = 0;
        float menorAltura = 500;
        float somaAltura = 0;
        float somaPeso = 0;
        int contador = 0;


        while(true){
            System.out.println("Digite 0 (zero) para interromper a execução ");
            System.out.println("Código: ");
            codigo = scan.nextInt();
            if(codigo == 0)
                break;
            System.out.println("Altura: ");
            altura = scan.nextFloat();
            System.out.println("Peso: ");
            peso = scan.nextFloat();
            if (altura > maiorAltura){
                maiorAltura = altura;
                codigoAlto = codigo;}
            else if (altura < menorAltura){
                menorAltura = altura;
                codigoBaixo = codigo;}
            if (peso > maiorPeso){
                maiorPeso = peso;
                codigoGordo = codigo;}
            else if (peso < menorPeso){
                menorPeso = peso;
                codigoLeve = codigo;}

            somaAltura += altura;
            somaPeso += peso;
            contador++;
        }
        System.out.println("O cliente mais alto tem " + maiorAltura + "m e o  seu código é "+ codigoAlto);
        System.out.println("O cliente mais baixo tem " + menorAltura + "m e o seu código é " + codigoBaixo );
        System.out.println("O cliente mais pesado tem " + maiorPeso + "kg e o seu código é " + codigoGordo);
        System.out.println("O cliente mais leve tem " + menorPeso + "kg e o seu código é " + codigoLeve);
        System.out.println("A média das alturas é de " +  somaAltura/ (float) contador + "m");
        System.out.println("A média dos pesos é de " + somaPeso/contador + "m");

    }
}
