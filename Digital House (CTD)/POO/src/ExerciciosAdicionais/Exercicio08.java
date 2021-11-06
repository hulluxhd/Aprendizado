package ExerciciosAdicionais;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio08 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String login;
        String senha;
        System.out.println("Por favor, digite seu login: ");
        login = scan.nextLine().toUpperCase();
        System.out.println("Por favor, digite sua senha: ");
        senha = scan.nextLine().toUpperCase();

        while(login.equals(senha)){
            System.out.println("A senha não pode ser igual ao login. Por favor, digite uma senha diferente");
            senha = scan.nextLine().toUpperCase();
        }

    }
}
