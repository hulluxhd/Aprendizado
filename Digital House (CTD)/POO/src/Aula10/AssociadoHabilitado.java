package Aula10;

public class AssociadoHabilitado extends Associado{
    private boolean habilitado;
    private double custoPiscina;

    public AssociadoHabilitado(String numero, String nome, String atividade, double valor, double custoPiscina){
        super(numero, nome, atividade, valor);
        this.custoPiscina = custoPiscina;
    }

    @Override
    public double custoMensal() {
        if (this.habilitado){
            return super.custoMensal() + this.custoPiscina;
        } else
            return super.custoMensal();
    }


    public boolean isHabilitado() {
        return habilitado;
    }

    public void setHabilitado(boolean habilitado) {
        this.habilitado = habilitado;
    }
}
