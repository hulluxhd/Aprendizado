package PooCheck2;


import java.util.Scanner;

public class Funcionario extends Pessoa  {
    private int cargaHorariaMensal;
    private int salario;
    private String cargo;


    //Construtor Herdado
    public Funcionario(String nome, int idade, String cpf, String endereco, int cargaHorariaMensal, int salario, String cargo) {
        super(nome, idade, cpf, endereco);
        this.cargaHorariaMensal = cargaHorariaMensal;
        this.salario = salario;
        this.cargo = cargo;
    }



    //Metodos

    @Override
    public String toString() {
        return "Funcionario{" +
                "cargaHorariaMensal=" + cargaHorariaMensal +
                ", salario=" + salario +
                ", cargo='" + cargo + '\'' +
                ", nome='" + nome + '\'' +
                ", idade=" + idade +
                ", cpf='" + cpf + '\'' +
                ", endereco='" + endereco + '\'' +
                ", horario_dataEntrada=" + horario_dataEntrada +
                ", horario_dataSaida=" + horario_dataSaida +
                '}';
    }


    public void CadastrarPessoa() {
        //criando Scanner
        Scanner scanLinha = new Scanner(System.in);
        System.out.println("Digite o nome: ");
        String salvarNome = scanLinha.nextLine();
        System.out.println("Digite a idade: ");
        int salvarIdade = Integer.parseInt(scanLinha.nextLine());
        System.out.println("Digite o Cpf: ");
        String salvarCpf = scanLinha.nextLine();
        System.out.println("Digite o Endereço: ");
        String salvarEndereco = scanLinha.nextLine();
        System.out.println("Digite a Carga horária mensal: ");
        int salvarCarga = Integer.parseInt(scanLinha.nextLine());
        System.out.println("Digite o salário: ");
        int salvarSalario = Integer.parseInt(scanLinha.nextLine());
        System.out.println("Digite cargo: ");
        String salvarCargo = scanLinha.nextLine();

        Funcionario funcionarioCadastrado = new Funcionario(salvarNome, salvarIdade, salvarCpf, salvarEndereco, salvarCarga, salvarSalario, salvarCargo);
        System.out.println("Cadastro Realizado com Sucesso!");
        System.out.println("nome: " + funcionarioCadastrado.nome);
        System.out.println("idade: " + funcionarioCadastrado.idade);
        System.out.println("cpf: " + funcionarioCadastrado.cpf);
        System.out.println("endereço: " + funcionarioCadastrado.endereco);
        System.out.println("Carga Horaria Mensal:  " + funcionarioCadastrado.cargaHorariaMensal);
        System.out.println("Salario:  " + funcionarioCadastrado.salario);
        System.out.println("Cargo:  " + funcionarioCadastrado.cargo);


    }


//
//    public static void CadastrarPessoa() {
//        //criando Scanner
//        Scanner scanLinha = new Scanner(System.in);
//        System.out.println("Digite o nome: ");
//        String salvarNome = scanLinha.nextLine();
//        System.out.println("Digite a idade: ");
//        int salvarIdade = Integer.parseInt(scanLinha.nextLine());
//        System.out.println("Digite o Cpf: ");
//        String salvarCpf = scanLinha.nextLine();
//        System.out.println("Digite o Endereço: ");
//        String salvarEndereco = scanLinha.nextLine();
//        System.out.println("Digite a Carga horária mensal: ");
//        int salvarCarga = Integer.parseInt(scanLinha.nextLine());
//        System.out.println("Digite o salário: ");
//        int salvarSalario = Integer.parseInt(scanLinha.nextLine());
//        System.out.println("Digite cargo: ");
//        String salvarCargo = scanLinha.nextLine();
//
//        Funcionario funcionarioCadastrado = new Funcionario(salvarNome, salvarIdade, salvarCpf, salvarEndereco, salvarCarga, salvarSalario, salvarCargo);
//        System.out.println("Cadastro Realizado com Sucesso!");
//        System.out.println("nome: " + funcionarioCadastrado.nome);
//        System.out.println("idade: " + funcionarioCadastrado.idade);
//        System.out.println("cpf: " + funcionarioCadastrado.cpf);
//        System.out.println("endereço: " + funcionarioCadastrado.endereco);
//        System.out.println("Carga Horaria Mensal:  " + funcionarioCadastrado.cargaHorariaMensal);
//        System.out.println("Salario:  " + funcionarioCadastrado.salario);
//        System.out.println("Cargo:  " + funcionarioCadastrado.cargo);
//
//
//    }

//    public static void consultarTodosOsDados(){
//
//        System.out.println("nome: "+ this.nome);
//        System.out.println("idade: "+ this.idade);
//        System.out.println("cpf: "+ this.cpf);
//        System.out.println("endereço: "+ this.endereco);
//        System.out.println("Carga Horaria Mensal:  "+ this.cargaHorariaMensal);
//        System.out.println("Salario:  "+ this.salario);
//        System.out.println("Cargo:  "+ this.cargo);
//
//
//    }


}