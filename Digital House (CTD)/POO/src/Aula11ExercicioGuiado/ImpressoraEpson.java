package Aula11ExercicioGuiado;

import java.time.LocalDate;

public class ImpressoraEpson extends Impressora{
    public ImpressoraEpson(String modelo, String tipoConexao, int dataFabricacao, int folhasDisponiveis, double porcentagemTinta) {
        super(modelo, tipoConexao, dataFabricacao, folhasDisponiveis, porcentagemTinta);
    }

    @Override
    public String imprimir() {
        super.setFolhasDisponiveis(getFolhasDisponiveis() - 1);
        super.setPorcentagemTinta(getPorcentagemTinta() - 0.01);
        return "Imprimindo.... restam agora " + super.getFolhasDisponiveis() + " folhas";
    }
}
