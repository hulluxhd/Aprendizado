package Aula14Colecoes;

public class Conta implements Comparable<Conta>{
    private int numConta;
    private double saldo;

    public Conta(int numConta, double saldo) {
        this.numConta = numConta;
        this.saldo = saldo;
    }

    public int getNumConta() {
        return numConta;
    }

    public void setNumConta(int numConta) {
        this.numConta = numConta;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    @Override
    public int compareTo(Conta o) {
        if (this.numConta == o.numConta){
            return 0;
        } else if (this.numConta > o.numConta){
            return 1;
        } else{
            return -1;
        }
    }
}
