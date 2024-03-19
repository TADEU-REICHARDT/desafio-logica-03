class heroiAtributos{
constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
}

escrever(){
    console.log(`O ${this.nome} atacou usando ${this.tipo}`)
    }
}
 
let heroi = new heroiAtributos("Thanos", "01", "Necromante");


heroi.escrever() 
