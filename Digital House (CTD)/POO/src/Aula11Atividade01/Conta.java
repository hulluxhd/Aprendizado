package Aula11Atividade01;

public abstract class Conta {
    protected double saldo;
    protected Cliente cliente;

    public Conta(double saldo, Cliente cliente) {
        this.saldo = saldo;
        this.cliente = cliente;
    }

    @Override
    public String toString() {
        return "Conta{" +
                "cliente=" + cliente +
                '}';
    }

    public abstract void exibirCliente();
    public abstract void sacar(double valor);
    public abstract void depositar(double valor);
    public abstract void consultarSaldo();
    }

