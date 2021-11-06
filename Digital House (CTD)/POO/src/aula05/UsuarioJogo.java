package aula05;

public class UsuarioJogo {
    private String nome;
    private String nickname;
    private int pontuacao;
    private int nivel;

    public UsuarioJogo(String nome, String nickname){
        this.nome = nome;
        this.nickname = nickname;
        this.pontuacao = 0;
        this.nivel = 1;
    }
    //métodos
    private void aumentarPontuacao(){
        this.pontuacao += 1;
    }

    public void subirNivel(){
        aumentarPontuacao();
        this.nivel += 1;
    }

    public void bonus(int valor){
        for(int i = 0; i < valor; i++){
            aumentarPontuacao();
        }
    }

    // getters e setters
    public String getNome(){
        return this.nome;
    }

    public String getNickname(){
        return this.nickname;
    }

    public int getPontuacao(){
        return this.pontuacao;
    }

    public int getNivel(){
        return this.nivel;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public void setNickname(String nickname){
        this.nickname = nickname;
    }

    public void setPontuacao(int pontos){
        this.pontuacao = pontos;
    }

    public void setNivel(int nivel){
        this.nivel = nivel;
    }



}
