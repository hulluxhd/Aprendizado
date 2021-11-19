package Aula11ExercicioGuiado;

public class Principal {
    public static void main(String[] args) {
        ImpressoraEpson impressoraEpson = new ImpressoraEpson("Teste", "4we", 2009, 33, 0.4);
        System.out.println(impressoraEpson.temPapel());
        System.out.println(impressoraEpson.imprimir());
        System.out.println(impressoraEpson.precisaTinta());
    }
}
