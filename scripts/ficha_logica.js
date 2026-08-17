const interface = {

    status: {

        nome: document.getElementById("nome"),
        jogador: document.getElementById("jogador"),
        estirpeResumo: document.getElementById("estirpe_resumo"),

        pv: document.getElementById("pv"),
        pvBar: document. getElementById("pv_bar"),

        san: document.getElementById("san"),
        sanBar: document. getElementById("san_bar"),

        pe: document.getElementById("pe"),
        peBar: document. getElementById("pe_bar"),

        def: document.getElementById("def"),
        intgr: document.getElementById("intgr"),

        forca: document.getElementById("forca"),
        agilidade: document.getElementById("agilidade"),
        intelecto: document.getElementById("intelecto"),
        presenca: document.getElementById("presenca"),
        vigor: document.getElementById("vigor"),

    },

    menuStatus: {

        nome: document.getElementById("novoNome"),
        jogador: document.getElementById("novoJogador"),

        pvFixo: document.getElementById("novoPvFixo"),
        pvMult: document.getElementById("novoPvMult"),
        pvModP: document.getElementById("novoPvModP"),
        pvModN: document.getElementById("novoPvModN"),
        pvExtra: document.getElementById("novoPvExtra"),

        sanFixo: document.getElementById("novoSanFixo"),
        sanMult: document.getElementById("novoSanMult"),
        sanModP: document.getElementById("novoSanModP"),
        sanModN: document.getElementById("novoSanModN"),
        sanExtra: document.getElementById("novoSanExtra"),

        peFixo: document.getElementById("novoPeFixo"),
        peMult: document.getElementById("novoPeMult"),
        peModP: document.getElementById("novoPeModP"),
        peModN: document.getElementById("novoPeModN"),
        peExtra: document.getElementById("novoPeExtra"),

        defFixo: document.getElementById("novoDefFixo"),
        defModP: document.getElementById("novoDefModP"),
        defModN: document.getElementById("novoDefModN"),
        defExtraP: document.getElementById("novoDefExtraP"),
        defExtraN: document.getElementById("novoDefExtraN"),

        intgrFixo: document.getElementById("novoIntgrFixo"),
        intgrModP: document.getElementById("novoIntgrModP"),
        intgrModN: document.getElementById("novoIntgrModN"),
        intgrExtraP: document.getElementById("novoIntgrExtraP"),
        intgrExtraN: document.getElementById("novoIntgrExtraN"),

        forcaFixa: document.getElementById("novaForcaFixa"),
        forcaModP: document.getElementById("novaForcaModP"),
        forcaModN: document.getElementById("novaForcaModN"),

        agilidadeFixa: document.getElementById("novaAgilidadeFixa"),
        agilidadeModP: document.getElementById("novaAgilidadeModP"),
        agilidadeModN: document.getElementById("novaAgilidadeModN"),

        intelectoFixo: document.getElementById("novoIntelectoFixo"),
        intelectoModP: document.getElementById("novoIntelectoModP"),
        intelectoModN: document.getElementById("novoIntelectoModN"),

        presencaFixa: document.getElementById("novaPresencaFixa"),
        presencaModP: document.getElementById("novaPresencaModP"),
        presencaModN: document.getElementById("novaPresencaModN"),

        vigorFixo: document.getElementById("novoVigorFixo"),
        vigorModP: document.getElementById("novoVigorModP"),
        vigorModN: document.getElementById("novoVigorModN"),

        atualizar: document.getElementById("btnAtualizarStatus")

    },


    pericias:{

        limitePericias: document.getElementById("limite_pericias"),
        limitePericiasBar: document.getElementById("limite_pericias_bar"),
        lista: document.getElementById("pericias_lista"),

        config: [
            { chave: "Acrobacia", label: "Acrobacia" },
            { chave: "Adestramento", label: "Adestramento" },
            { chave: "Artes", label: "Artes" },
            { chave: "Atletismo", label: "Atletismo" },
            { chave: "Ciencias", label: "Ciências" },
            { chave: "Crime", label: "Crime" },
            { chave: "Confeccao", label: "Confecção" },
            { chave: "Culinaria", label: "Culinária" },
            { chave: "Cultura", label: "Cultura" },
            { chave: "Diplomacia", label: "Diplomacia" },
            { chave: "Enganacao", label: "Enganação" },
            { chave: "Fortitude", label: "Fortitude" },
            { chave: "Furtividade", label: "Furtividade" },
            { chave: "Infeccao", label: "Infecção" },
            { chave: "Iniciativa", label: "Iniciativa" },
            { chave: "Intimidacao", label: "Intimidação" },
            { chave: "Intuicao", label: "Intuição" },
            { chave: "Investigacao", label: "Investigação" },
            { chave: "Luta", label: "Luta" },
            { chave: "Medicina", label: "Medicina" },
            { chave: "Percepcao", label: "Percepção" },
            { chave: "Pontaria", label: "Pontaria" },
            { chave: "Reflexos", label: "Reflexos" },
            { chave: "Sobrevivencia", label: "Sobrevivência" },
            { chave: "Engenharia", label: "Engenharia" },
            { chave: "Vontade", label: "Vontade" },
        ],

    },

    menuPericias: {

        limite: document.getElementById("novoLimitePericias"),
        lista: document.getElementById("listaEditarPericias"),

        // Antes eram arrays indexados por posição; agora são objetos indexados pela chave da perícia
        treinadas: {},
        bonus: {}

    },


    combate: {

        profAgeis: document.getElementById("profAgeis"),
        profBalanceadas: document.getElementById("profBalanceadas"),
        profBrutas: document.getElementById("profBrutas"),



    },

    menuDano:{

        titulo: document.getElementById("menu_dano_titulo"),
        select: document.getElementById("menu_dano_danos"),
        input: document.getElementById("menu_dano_input"),
        lista: document.getElementById("lista_danos_sofridos"),  

        tipoAtual: "",

        config: {

            pv: {
                titulo: "Receber dano",
                // "Físico" continua fora da lista de propósito (é resistência agregada, não um tipo
                // de dano selecionável) -- igual ao original. A diferença é que agora cada entrada
                // carrega a "chave" real usada em ficha.resistenciasF/temporario.pvP, então não hà
                // mais chance de desalinhamento entre a posição na lista e a posição nos dados.
                tipos: [
                    { chave: "Corte", label: "Corte" },
                    { chave: "Balistico", label: "Balístico" },
                    { chave: "Impacto", label: "Impacto" },
                    { chave: "Perfuracao", label: "Perfuração" },
                    { chave: "Termico", label: "Térmico" },
                    { chave: "Quimico", label: "Químico" },
                    { chave: "Mundano", label: "Mundano" },
                    { chave: "Ambicao", label: "Ambição" },
                    { chave: "Fogo", label: "Fogo" },
                    { chave: "Fome", label: "Fome" },
                    { chave: "Podre", label: "Podre" },
                    { chave: "Marcado", label: "Marcado" },
                    { chave: "Real", label: "Real" },
                ]
            },

            san: {
                titulo: "Receber dano mental",
                tipos: [
                    { chave: "Mundano", label: "Mundano" },
                    { chave: "Ambicao", label: "Ambição" },
                    { chave: "Fogo", label: "Fogo" },
                    { chave: "Fome", label: "Fome" },
                    { chave: "Podre", label: "Podre" },
                    { chave: "Marcado", label: "Marcado" },
                    { chave: "Mental", label: "Mental" },
                ]
            },

            pe: {
                titulo: "Gastar PE",
                tipos: null
            }

        },

    },

    menuInventario:{

        botoes:{

            arma: document.getElementById("novoArmaBtn"),
            amuleto: document.getElementById("novoAmuletoBtn"),
            protecao: document.getElementById("novoProtecaoBtn"),
            mochila: document.getElementById("novoMochilaBtn"),
            recipiente: document.getElementById("novoRecipienteBtn"),
            ferramenta: document.getElementById("novoFerramentaBtn"),
            suprimento: document.getElementById("novoSuprimentoBtn"),
            variado: document.getElementById("novoVariadoBtn")

        },

        forms:{

            arma: document.getElementById("novoArmaForm"),
            amuleto: document.getElementById("novoAmuletoForm"),
            protecao: document.getElementById("novoProtecaoForm"),
            mochila: document.getElementById("novoMochilaForm"),
            recipiente: document.getElementById("novoRecipienteForm"),
            ferramenta: document.getElementById("novoFerramentaForm"),
            suprimento: document.getElementById("novoSuprimentoForm"),
            variado: document.getElementById("novoVariadoForm")

        },

        menuAdicionarTitulo: document.getElementById("menu_adicionar_titulo")

    }

}




const tela = {

    preencherPericias(){

    const lista = interface.pericias.lista;

    lista.innerHTML = "";

    interface.pericias.config.forEach(({chave, label}) => {

        const treinada = ficha.pericias[chave];
        const bonus = pericias.total(chave);

        if(!treinada && bonus === 0){
            return;
        }

        const div = document.createElement("div");
        div.className = "pericia";

        div.innerHTML = `
            <h3 class="texto_pericia">${label}</h3>
            <h3 class="bonus_pericia">+${bonus}</h3>
        `;

        lista.appendChild(div);

    });

    },

    atualizarStatus(){

        interface.status.nome.textContent = ficha.nome; 
        interface.status.jogador.textContent = ficha.jogador;
        interface.status.estirpeResumo.textContent = ficha.estirpe + " • " + talentos.rk + " §"; 

        interface.status.pv.textContent = "PV  " + status.pvT + " / " + status.pvA;
        interface.status.pvBar.style.width = (status.pvA * 100) / status.pvT + "%";

        interface.status.san.textContent = "SAN  " + status.sanT + " / " + status.sanA;
        interface.status.sanBar.style.width = (status.sanA * 100) / status.sanT + "%";
        
        interface.status.pe.textContent = "PE  " + status.peT + " / " + status.peA;
        interface.status.peBar.style.width = (status.peA * 100) / status.peT + "%";

        interface.status.def.textContent = status.defA;
        interface.status.intgr.textContent = status.intgrA;

        interface.status.forca.textContent = status.forcaA;
        interface.status.agilidade.textContent = status.agilidadeA;
        interface.status.intelecto.textContent = status.intelectoA;
        interface.status.presenca.textContent = status.presencaA;
        interface.status.vigor.textContent = status.vigorA;

    },

    atualizarPericias(){

        interface.pericias.limitePericias.textContent = "L.Pericias " + pericias.totalTreinamento + "/" + ficha.limitePericias;
        interface.pericias.limitePericiasBar.style.width = (pericias.totalTreinamento * 100) / ficha.limitePericias + "%";
        this.preencherPericias()

    },

    atualizarCombate(){

        interface.combate.profAgeis.textContent = ficha.proficiencias.Ageis;
        interface.combate.profBalanceadas.textContent = ficha.proficiencias.Balanceadas;
        interface.combate.profBrutas.textContent = ficha.proficiencias.Brutas;

    },

    mudarAba(sessao){

        const abas = document.querySelectorAll(".container");
        const backgrounds = [
            "../acervo/novaficha_background_base.jpg",
            "../acervo/novaficha_background_pericias.jpg",
            "../acervo/novaficha_background_combate.jpg",
            "../acervo/novaficha_background_base.jpg",
            "../acervo/novaficha_background_pericias.jpg",
            "../acervo/novaficha_background_base.jpg",
            "../acervo/novaficha_background_base.jpg",
        ]


        abas.forEach(aba =>{

            aba.style.display = "none";

        });

        document.body.style.backgroundImage = `url("${backgrounds[sessao]}")`;
        abas[0].style.display = "flex";
        abas[sessao].style.display = "flex";

        menu.abrirOverlay(0, null)

        },

    abrirProficiencias(){

        const proficiencias = document.getElementById("proficiencias");

        if (proficiencias.classList[1] == "fechado"){

            proficiencias.classList.remove("fechado");

        }else{

            proficiencias.classList.add("fechado");

        }

    }

}

const salvar ={

    numero(input){

    return Number(input.value) || 0;

    },

    salvarCampo(input, destino, chave, numero = false){

    if(input.value === ""){
        return;
    }

    destino[chave] = numero
        ? this.numero(input)
        : input.value;

    input.value = "";

}

}

const editar = {

    atualizarStatus(){

        //=========================
        // NOMES
        //=========================

        salvar.salvarCampo(interface.menuStatus.nome, ficha, "nome");
        salvar.salvarCampo(interface.menuStatus.jogador, ficha, "jogador");

        //=========================
        // PV
        //=========================

        salvar.salvarCampo(interface.menuStatus.pvFixo, ficha.pvC, 0, true);
        salvar.salvarCampo(interface.menuStatus.pvMult, ficha.pvC, 1, true);
        salvar.salvarCampo(interface.menuStatus.pvModP, ficha.pvC, 2, true);
        salvar.salvarCampo(interface.menuStatus.pvModN, ficha.pvC, 3, true);

        salvar.salvarCampo(interface.menuStatus.pvExtra, temporario, "pvE", true);

        //=========================
        // SAN
        //=========================

        salvar.salvarCampo(interface.menuStatus.sanFixo, ficha.sanC, 0, true);
        salvar.salvarCampo(interface.menuStatus.sanMult, ficha.sanC, 1, true);
        salvar.salvarCampo(interface.menuStatus.sanModP, ficha.sanC, 2, true);
        salvar.salvarCampo(interface.menuStatus.sanModN, ficha.sanC, 3, true);

        salvar.salvarCampo(interface.menuStatus.sanExtra, temporario, "sanE", true);

        //=========================
        // PE
        //=========================

        salvar.salvarCampo(interface.menuStatus.peFixo, ficha.peC, 0, true);
        salvar.salvarCampo(interface.menuStatus.peMult, ficha.peC, 1, true);
        salvar.salvarCampo(interface.menuStatus.peModP, ficha.peC, 2, true);
        salvar.salvarCampo(interface.menuStatus.peModN, ficha.peC, 3, true);

        salvar.salvarCampo(interface.menuStatus.peExtra, temporario, "peE", true);

        //=========================
        // DEFESA
        //=========================

        salvar.salvarCampo(interface.menuStatus.defFixo, ficha.defC, 0, true);
        salvar.salvarCampo(interface.menuStatus.defModP, ficha.defC, 1, true);
        salvar.salvarCampo(interface.menuStatus.defModN, ficha.defC, 2, true);

        salvar.salvarCampo(interface.menuStatus.defExtraP, temporario.defE, 0, true);
        salvar.salvarCampo(interface.menuStatus.defExtraN, temporario.defE, 1, true);

        //=========================
        // INTEGRIDADE
        //=========================

        salvar.salvarCampo(interface.menuStatus.intgrFixo, ficha.intgrC, 0, true);
        salvar.salvarCampo(interface.menuStatus.intgrModP, ficha.intgrC, 1, true);
        salvar.salvarCampo(interface.menuStatus.intgrModN, ficha.intgrC, 2, true);

        salvar.salvarCampo(interface.menuStatus.intgrExtraP, temporario.intgrE, 0, true);
        salvar.salvarCampo(interface.menuStatus.intgrExtraN, temporario.intgrE, 1, true);

        //=========================
        // ATRIBUTOS
        // (indices numericos trocados pelo nome usado em ficha.atributos / temporario.atributosModP/N)
        //=========================

        salvar.salvarCampo(interface.menuStatus.forcaFixa, ficha.atributos, "For", true);
        salvar.salvarCampo(interface.menuStatus.forcaModP, temporario.atributosModP, "For", true);
        salvar.salvarCampo(interface.menuStatus.forcaModN, temporario.atributosModN, "For", true);

        salvar.salvarCampo(interface.menuStatus.agilidadeFixa, ficha.atributos, "Agi", true);
        salvar.salvarCampo(interface.menuStatus.agilidadeModP, temporario.atributosModP, "Agi", true);
        salvar.salvarCampo(interface.menuStatus.agilidadeModN, temporario.atributosModN, "Agi", true);

        salvar.salvarCampo(interface.menuStatus.intelectoFixo, ficha.atributos, "Int", true);
        salvar.salvarCampo(interface.menuStatus.intelectoModP, temporario.atributosModP, "Int", true);
        salvar.salvarCampo(interface.menuStatus.intelectoModN, temporario.atributosModN, "Int", true);

        salvar.salvarCampo(interface.menuStatus.presencaFixa, ficha.atributos, "Pres", true);
        salvar.salvarCampo(interface.menuStatus.presencaModP, temporario.atributosModP, "Pres", true);
        salvar.salvarCampo(interface.menuStatus.presencaModN, temporario.atributosModN, "Pres", true);

        salvar.salvarCampo(interface.menuStatus.vigorFixo, ficha.atributos, "Vig", true);
        salvar.salvarCampo(interface.menuStatus.vigorModP, temporario.atributosModP, "Vig", true);
        salvar.salvarCampo(interface.menuStatus.vigorModN, temporario.atributosModN, "Vig", true);

        //=========================
        // Atualiza a interface
        //=========================

        tela.atualizarStatus();
        abrirOverlay(0,null);

    },
    atualizarPericias(){

        salvar.salvarCampo(
            interface.menuPericias.limite,
            ficha,
            "limitePericias",
            true
        );

        // treinadas/bonus agora são objetos {chave: elementoDom} em vez de arrays
        Object.entries(interface.menuPericias.treinadas).forEach(([chave, check])=>{

            ficha.pericias[chave] = check.checked;

        });

        Object.entries(interface.menuPericias.bonus).forEach(([chave, input])=>{

            ficha.periciasBonus[chave] = Number(input.value) || 0;

        });

        tela.atualizarPericias();
        abrirOverlay(0,null);

    }
}

const menu = {

    preencherTipos(config){

        const select = interface.menuDano.select;

        select.innerHTML = "";

        if(config.tipos == null){

            select.style.display = "none";
            return;

        }

        select.style.display = "block";

        config.tipos.forEach(({chave, label})=>{

            const option = document.createElement("option");

            option.value = chave;
            option.textContent = label;

            select.appendChild(option);

        });

    },

    preencherListaDano(tipo){

        let danos;
        let tipos;

        switch(tipo){

            case "pv":
                danos = temporario.pvP;
                tipos = interface.menuDano.config.pv.tipos;
                break;

            case "san":
                danos = temporario.sanP;
                tipos = interface.menuDano.config.san.tipos;
                break;

            case "pe":
                interface.menuDano.lista.innerHTML = "";
                return;

        }

        const lista = interface.menuDano.lista;

        lista.innerHTML = "";

        // Itera sobre a config (que sabe o nome/label de cada tipo) em vez do array de danos diretamente
        tipos.forEach(({chave, label})=>{

            const valor = danos[chave];

            if(valor <= 0) return;

            const div = document.createElement("div");

            div.className = "dano_sofrido";

            div.innerHTML = `
                <h3>${label}</h3>
                <h3>${valor}</h3>
            `;

            lista.appendChild(div);

    })},

    configurarMenuDano(tipo){

        interface.menuDano.tipoAtual = tipo;

        const config = interface.menuDano.config[tipo];

        interface.menuDano.titulo.textContent = config.titulo;

        this.preencherTipos(config);

        this.preencherListaDano(tipo);
    
    },

    menuDanoCurar(){

        const tipo = interface.menuDano.tipoAtual;

        const valor = Number(interface.menuDano.input.value);

        // select.value agora é o nome do tipo (string), não mais um indice numerico
        const chave = interface.menuDano.select.value;

        switch(tipo){

            case "pv":

                status.recuperarDanoPV(chave, valor);

                break;

            case "san":

                status.recuperarDanoSan(chave, valor);

                break;

            case "pe":

                status.recuperarPE(valor);

                break;

        }

        tela.atualizarStatus();

        this.preencherListaDano(interface.menuDano.tipoAtual);

        interface.menuDano.input.value = "";

    },

    menuDanoSofrer(){

    const tipo = interface.menuDano.tipoAtual;

    const valor = Number(interface.menuDano.input.value);

    const chave = interface.menuDano.select.value;

    switch(tipo){

        case "pv":

            status.sofrerDanoPV(chave, valor);

            break;

        case "san":

            status.sofrerDanoSan(chave, valor);

            break;

        case "pe":

            status.perderPE(valor);

            break;

    }

    tela.atualizarStatus();

    this.preencherListaDano(interface.menuDano.tipoAtual);

    interface.menuDano.input.value = "";

    },

    //MENU PERICIAS

    preencherMenuPericias(){

    interface.menuPericias.lista.innerHTML = "";

    interface.menuPericias.treinadas = {};
    interface.menuPericias.bonus = {};

    interface.pericias.config.forEach(({chave, label})=>{

        const linha = document.createElement("div");
        linha.className = "menu_pericia";

        const titulo = document.createElement("h3");
        titulo.textContent = label;

        const check = document.createElement("input");
        check.type = "checkbox";
        check.checked = ficha.pericias[chave];

        const bonus = document.createElement("input");
        bonus.type = "number";
        bonus.value = ficha.periciasBonus[chave];

        interface.menuPericias.treinadas[chave] = check;
        interface.menuPericias.bonus[chave] = bonus;

        linha.append(titulo, check, bonus);

        interface.menuPericias.lista.appendChild(linha);

    });

    },

    abrirOverlay(tipo, id){

        const overlay = document.getElementById("borrar");
        const menuBtn = document.getElementById("abrir_menu")

        if (overlay.style.display == "flex"){

            overlay.style.display = "none";
            menuBtn.style.display = "flex"

        }else{

            overlay.style.display = "flex";
            menuBtn.style.display = "none"

        }

        const modais = document.querySelectorAll(".editar, .menu");

        modais.forEach(modal =>{
            modal.classList.remove("aberto");
            modal.style.display = "none";
        });

        const modal = document.getElementById(id);


        if (!id){
            return
        }
        
        modal.style.display = "flex";

        requestAnimationFrame(() =>{
            modal.classList.add("aberto");
        });

            switch(tipo){

            case 1:
                this.configurarMenuDano("pv");
                break;

            case 2:
                this.configurarMenuDano("san");
                break;

            case 3:
                this.configurarMenuDano("pe");
                break;
            case 4:

                this.preencherMenuPericias();
                break;

        }

    },

    //MENU INVENTARIO

    mudarAbaInventario(form, titulo){

        abas = document.querySelectorAll(".menu_adicionar_form")
        const titulos = Object.keys(interface.menuInventario.forms);

        abas.forEach(aba =>{

            aba.style.display = "none";

        });

        form.style.display = "flex";



        interface.menuInventario.menuAdicionarTitulo.textContent = titulos[titulo];

    }

}

menu.mudarAbaInventario(interface.menuInventario.forms.arma, 0)

//EVENTOS

//Permite interagir com os elementos dentro da div "Borrar", sem ativar oa função de sair
document.querySelectorAll(".editar, .menu").forEach(elemento => {

    elemento.addEventListener("click", function(event){

        event.stopPropagation();

    });

});


//CARREGAMENTO INICIAL
tela.atualizarStatus()
tela.atualizarPericias()
tela.atualizarCombate()