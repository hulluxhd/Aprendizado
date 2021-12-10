package aula14;

import java.util.ArrayList;
import java.util.Collections;

public class Equipe {
    private ArrayList listaJogadores = new ArrayList();
    private String nome;

    public Equipe(String nome) {
        this.nome = nome;
    }

    public void addJogador(Jogador jogador) {
        listaJogadores.add(jogador);
    }

   // public void mostrarJogadoresTitulates(){
    //    Collections.sort(listaJogadores);

        //for (Jogador jogador: listaJogadores) {
          //  if (jogador.isLesionado()){
            //    System.out.println("Nome: " + jogador.getNome() + "\nNúmero Camisa: " + jogador.getNumCamisa());
            //}
        //}
    //}


//    public int getQuantidadeJogadoresLesionados(){
  //      int contador = 0;
   //     for (Jogador jogador: listaJogadores) {
     //       if(jogador.isLesionado() && jogador.isTitular()){
       //         contador++;
         //   }

        //}
        //return contador;
    //}
}
