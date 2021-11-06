package aula06;

import java.time.LocalDate;
import java.util.Date;

public class Exercicio01 {
    private String modelo;
    private String tipoConexao;
    private LocalDate dataFabricacao;
    private int folhasDisponiveis;

    public Exercicio01(String modelo, String tipoConexao, LocalDate dataFabricacao){
        this.modelo = modelo;
        this.tipoConexao = tipoConexao;
        this.dataFabricacao = dataFabricacao;
        this.folhasDisponiveis = 0;
    }

    private boolean temPapel(){
        if(this.folhasDisponiveis > 0){
            return true;
        } else {
            return false;
    }}

    public void imprimir(String texto){
        if(temPapel()){
            System.out.println(texto);
            this.folhasDisponiveis --;
        }
        else System.out.println("não tem papel");
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getTipoConexao() {
        return tipoConexao;
    }

    public void setTipoConexao(String tipoConexao) {
        this.tipoConexao = tipoConexao;
    }

    public LocalDate getDataFabricacao() {
        return dataFabricacao;
    }

    public void setDataFabricacao(LocalDate dataFabricacao) {
        this.dataFabricacao = dataFabricacao;
    }

    public int getFolhasDisponiveis() {
        return folhasDisponiveis;
    }

    public void setFolhasDisponiveis(int folhasDisponiveis) {
        this.folhasDisponiveis = folhasDisponiveis;
    }
}
