package aula02;

public class ex02q2 {
    public static void main(String[] args) {
        Integer n1 = 3;
        Integer n2 = 2;
        if(n1.equals(n2)){
            System.out.println("São iguais!");
        } else {
            if(n1.compareTo(n2) > 0){
                System.out.println("Número 1 é maior que o número 2!");
            } else {
                System.out.println("N2 é maior que N1!");
            }
        }
    }
}
