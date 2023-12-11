class CasaCostruzione {
    constructor(nome,sede) {
        this.nome= nome;
        this.sede = sede;
        this._capitale = 100000;
    }
    getNome() {
        console.log(this.nome);
    }
    setCapitale(valore) {
        this._capitale = valore;
    }
    brochure() {
        console.log('Siamo '+ this.nome + ' e siamo di '+ this.sede);
    }
}

class Concessionaria extends CasaCostruzione {
    constructor(nome, sede, numeroDipendenti) {
        super (nome, sede);
        this.numeroDipendenti = numeroDipendenti;
    }

    getNome() {
        console.log(this.nome + ' concessionaria'); 
    }
    vendita(value) {
        this.setCapitale(this._capitale + value);
    }
    brochureConcessionaria() {
        super.brochure();
        console.log('Questa è la concessionaria');
    }
    getDipendenti() {
        console.log(this.numeroDipendenti);
    }
}

class Suv extends Concessionaria {
    constructor(nome, sede, numeroDipendenti, modello, colore, prezzo) {
        super(nome, sede, numeroDipendenti);
        this.modello = modello;
        this.colore = colore;
        this.prezzo = prezzo;
    }
    getProvenienza() {
        console.log('Arrivo dalla sede di '+ this.sede + 'di ' +this.nome);
    }
    getColore() {
        console.log(this.colore);
    }
    getPrezzo() {
        console.log(this.prezzo);
    }
    getModello() {
        console.log(this.modello);
    }
}
RangeROverEvoque = new Suv('Range Rover', 'Roma', 10, 'Evoque', 'rossa', 50000);
RangeROverEvoque.getProvenienza();
RangeROverEvoque.getColore();
RangeROverEvoque.getModello();
RangeROverEvoque.getPrezzo();
RangeROverEvoque.getDipendenti();
RangeROverEvoque.brochure();
RangeROverEvoque.brochureConcessionaria();
RangeROverEvoque.getNome();

