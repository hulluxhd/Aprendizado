package aula06;

import java.time.LocalDate;

public class PrincipalExercicio01 {
    public static void main(String[] args) {
        Exercicio01 i1 = new Exercicio01("01", "SATA", LocalDate.of(2021,2,12));
        System.out.println(i1.getDataFabricacao());
        i1.setFolhasDisponiveis(30);
        System.out.println(i1.getFolhasDisponiveis());
        i1.imprimir("Testando 123");
    }

    }

