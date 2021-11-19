package Aula10Mesa;

public class Principal {
    public static void main(String[] args) {
        AssistenteAdministrativo assistenteAdministrativo1 = new AssistenteAdministrativo("DENNY",
                5000, 333, "222", true);
        AssistenteTecnico assistenteTecnico1 = new AssistenteTecnico("denny", 3000, 2121, 34433,
                "343433");

        assistenteTecnico1.salarioDoMes();
        assistenteAdministrativo1.salarioDoMes();

    }


}
