package Aula10;

public class Pincipal {
    public static void main(String[] args) {
        Associado associado = new Associado("123", "Denny", "Musculação", 90);
        System.out.println(associado.custoMensal());

        AssociadoHabilitado associadoHabilitado = new AssociadoHabilitado("12312", "Marcois", "Loucura",
                90, 30);
        System.out.println(associadoHabilitado.custoMensal());
        associadoHabilitado.setHabilitado(true);
        System.out.println(associadoHabilitado.isHabilitado());
        System.out.println(associadoHabilitado.custoMensal());

        System.out.println(associado);
    }
}
