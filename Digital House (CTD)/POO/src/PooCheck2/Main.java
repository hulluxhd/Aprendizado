package PooCheck2;

import java.time.LocalDateTime;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {


        //Criando Funcionário e pessoa, pelos métodos das classes


        Scanner scanLinha = new Scanner(System.in);
        System.out.println("Digite o nome: ");
        String salvarNome = scanLinha.nextLine();
        System.out.println("Digite a idade: ");
        int salvarIdade = Integer.parseInt(scanLinha.nextLine());
        System.out.println("Digite o Cpf: ");
        String salvarCpf = scanLinha.nextLine();
        System.out.println("Digite o Endereço: ");
        String salvarEndereco = scanLinha.nextLine();


        Cliente clienteCadastrado = new Cliente(salvarNome,salvarIdade,salvarCpf,salvarEndereco, "Cadastro realizado.");

        clienteCadastrado.CadastrarCliente(clienteCadastrado);




//
//
//        Funcionario funcionario01 = new Funcionario("Jonas",28,"39393993939", "Sp, São paulo, Rua roldana, 24", 200,9800, "assistente de zelador");
//        System.out.println(funcionario01.nome);
//
//        funcionario01.consultarTodosOsDados();



//        Cliente c1 = new Cliente();
//
//        c1.idade = 20;
//        c1.horario_dataEntrada = LocalDateTime.now();
//        System.out.println(c1.horario_dataEntrada);
//
//
//        System.out.println(c1.idade);


    }
}
