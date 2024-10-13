class Heroi {
    // Construtor para inicializar as propriedades
    constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    }

    //Método que exibe a mensagem de ataque baseado no tipo
    atacar() {
    let ataque;

    //Condicional que define o tipo de ataque baseado no tipo do herói
    if (this.tipo === "Mago") {
        ataque = "magia";
    } else if (this.tipo === "Guerreiro") {
        ataque = "espada";
    } else if (this.tipo === "Monge") {
        ataque = "artes marciais";
    } else if (this.tipo === "Ninja") {
        ataque = "shuriken";
    } else {
        ataque = "ataque desconhecido";
    }

    // Exibe a mensagem de ataque
    console.log(`${this.tipo} atacou usando ${ataque}`);
    }
}

//Exemplos de uso da classe Heroi

let heroi1 = new Heroi("Aragorn", 30, "Guerreiro");
heroi1.atacar();

let heroi2 = new Heroi("Gandalf", 100, "Mago");
heroi2.atacar();

let heroi3 = new Heroi("Bruce", 28, "Monge");
heroi3.atacar();

let heroi4 = new Heroi("Kenshin", 25, "Ninja");
heroi4.atacar();
