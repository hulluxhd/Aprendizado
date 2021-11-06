package aula03;

public class ex07 {
    public static void salario(float x){
        // x são as horas trabalhadas
        // máximo de 40. Mais que isso tem hora extra com 50% adicional

        float valorSemanal = 875;
        float valorHora = valorSemanal/40;
        float total = 0;

        if(x <= 40){
            total =  (valorHora * x);
        } else{
            total = 875 + (x-40) * 1.5f * valorHora;
        }
        System.out.println("Ela trabalhou " + x + " horas e recebeu, ao todo, R$" + total);
    }


    public static void main(String[] args) {
    salario(50);
    }
}
