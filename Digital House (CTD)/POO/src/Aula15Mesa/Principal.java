package Aula15Mesa;

public class Principal {
    public static void main(String[] args) {
        Capitao capitao1 = new Capitao("Holandês Voador", "Sou do Polvão", "22222");
        Veleiro veleiro1 = new Veleiro(capitao1, 300000, 15000, 2021, 20, 4);
        Iate iate1 = new Iate(capitao1, 500000, 30000, 2020, 40, 5);
        Iate iate2 = new Iate(capitao1, 600000, 45000, 2021, 50, 8);

        System.out.println(veleiro1.isBig());
        System.out.println(veleiro1.valorAluguel());
        System.out.println(iate1.valorAluguel());
        System.out.println(iate1.compareTo(iate2));






    }
}
