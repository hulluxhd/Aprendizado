package Aula11ExercicioGuiado;

import java.time.LocalDate;

public abstract class Impressora {
    private String modelo;
    private String tipoConexao;
    private int dataFabricacao;
    private int folhasDisponiveis;
    private double porcentagemTinta;

    public Impressora(String modelo, String tipoConexao, int dataFabricacao, int folhasDisponiveis, double porcentagemTinta){
        this.modelo = modelo;
        this.tipoConexao = tipoConexao;
        this.dataFabricacao = dataFabricacao;
        this.folhasDisponiveis = folhasDisponiveis;
        this.porcentagemTinta = porcentagemTinta;
    }

    public boolean temPapel(){
        if (folhasDisponiveis > 0){
            return true;
        } else
            return false;
    }

    public boolean precisaTinta(){
        if (porcentagemTinta <= 0.15){
            return true;
        } else
            return false;
    }

    public abstract String imprimir();



    // setters and getters

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

    public int getDataFabricacao() {
        return dataFabricacao;
    }

    public void setDataFabricacao(int dataFabricacao) {
        this.dataFabricacao = dataFabricacao;
    }

    public int getFolhasDisponiveis() {
        return folhasDisponiveis;
    }

    public void setFolhasDisponiveis(int folhasDisponiveis) {
        this.folhasDisponiveis = folhasDisponiveis;
    }

    public double getPorcentagemTinta() {
        return porcentagemTinta;
    }

    public void setPorcentagemTinta(double porcentagemTinta) {
        this.porcentagemTinta = porcentagemTinta;
    }
}
