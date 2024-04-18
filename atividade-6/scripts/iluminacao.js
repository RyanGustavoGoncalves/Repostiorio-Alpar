class luz {
    static luzInstance;
    sala = false;
    cozinha = false;
    quarto = false;
    banheiro = false;
    observer = [];

    toggle(comodo) {
        if (comodo == "sala") {
            this.sala = !this.sala;
        }
        if (comodo == "cozinha") {
            this.cozinha = !this.cozinha;
        }
        if (comodo == "quarto") {
            this.quarto = !this.quarto;
        }
        if (comodo == "banheiro") {
            this.banheiro = !this.banheiro;
        }

        this.executar();
    }

    getState(comodo) {
        if (comodo == "sala") {
            return this.sala;
        }
        if (comodo == "cozinha") {
            return this.cozinha;
        }
        if (comodo == "quarto") {
            return this.quarto;
        }
        if (comodo == "banheiro") {
            return this.banheiro;
        }
    }

    inscrever(func) {
        this.observer.push(func);
    }

    executar() {
        this.observer.forEach((func) => {
            func();
        })
    }
}

luz.luzInstance = new luz();