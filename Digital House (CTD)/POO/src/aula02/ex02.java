package aula02;

public class ex02 {
    public static void main(String[] args) {
        String t1 = "TESTE";
        String t2 = "teste";
        if (t1.equals(t2)) {
            System.out.println("São iguais");
        } else {
            System.out.println("Não são iguais");
        }
        t1 = t1.toUpperCase();;
        t2 = t2.toUpperCase();
        System.out.println(t1);
        System.out.println(t2);
        if (t1.equals(t2)) {
            System.out.println("Agora são iguais");
        }
    }
}
