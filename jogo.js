let etapa = 0;
const totaletapa = 5;

let escolhas = [];


function escolher(opcao) {

    escolhas.push(opcao);

    concluir();
}


function concluir() {

    if (etapa < totaletapa) {

        etapa++;

        let porcentagem = (etapa / totaletapa) * 100;

        document.getElementById("barra").style.width = porcentagem + "%";

        document.getElementById("texto").innerText =
            `Etapa ${etapa} de ${totaletapa}`;


        if (etapa === 1) {

            document.getElementById("pergunta-principal").innerHTML =
                "Um amigo próximo está passando por uma fase complicada e começou a se afastar das atividades que gostava. Você percebe que ele parece estar precisando de apoio.";

            document.getElementById("conteudo1").innerHTML =
                `<h1 class="pergunta">
                    Conversar com ele e perguntar como pode ajudar.
                </h1>`;

            document.getElementById("conteudo2").innerHTML =
                `<h1 class="pergunta">
                    Incentivá-lo a procurar ajuda de um adulto de confiança ou profissional.
                </h1>`;

            document.getElementById("conteudo3").innerHTML =
                `<h1 class="pergunta">
                    Apenas mandar mensagens de vez em quando, sem conversar sobre o assunto.
                </h1>`;

            document.getElementById("conteudo4").innerHTML =
                `<h1 class="pergunta">
                    Ignorar a situação porque você acha que não é problema seu.
                </h1>`;
        }


        if (etapa === 2) {

            document.getElementById("pergunta-principal").innerHTML =
                "Você começou a praticar um esporte novo e fez novas amizades. Depois de um treino, alguns integrantes do grupo convidam você para uma atividade em que haverá consumo de substâncias.";

            document.getElementById("conteudo1").innerHTML =
                `<h1 class="pergunta">
                    Recusar e sugerir que o grupo faça outra atividade depois do treino.
                </h1>`;

            document.getElementById("conteudo2").innerHTML =
                `<h1 class="pergunta">
                    Ficar com os colegas que respeitam sua decisão e continuar construindo novas amizades no esporte.
                </h1>`;

            document.getElementById("conteudo3").innerHTML =
                `<h1 class="pergunta">
                    Ir ao local, mas ficar sem participar mesmo estando desconfortável.
                </h1>`;

            document.getElementById("conteudo4").innerHTML =
                `<h1 class="pergunta">
                    Participar para tentar ser aceito pelo novo grupo.
                </h1>`;
        }


        if (etapa === 3) {

            document.getElementById("pergunta-principal").innerHTML =
                "Você está se sentindo muito mal. Depois de um dia muito difícil, você chega em casa se sentindo triste, cansado e sem vontade de conversar com ninguém.";

            document.getElementById("conteudo1").innerHTML =
                `<h1 class="pergunta">
                    Procurar ajuda de um adulto de confiança ou profissional para conversar sobre o que está acontecendo.
                </h1>`;

            document.getElementById("conteudo2").innerHTML =
                `<h1 class="pergunta">
                    Falar com um amigo de confiança para contar como estou me sentindo.
                </h1>`;

            document.getElementById("conteudo3").innerHTML =
                `<h1 class="pergunta">
                    Ficar sozinho em casa e tentar lidar com tudo sem contar para ninguém.
                </h1>`;

            document.getElementById("conteudo4").innerHTML =
                `<h1 class="pergunta">
                    Tomar algo por conta própria para conseguir dormir e esquecer o problema.
                </h1>`;
        }


        if (etapa === 4) {

            document.getElementById("pergunta-principal").innerHTML =
                "Durante o intervalo, alguns colegas começam a falar sobre drogas e tentam convencer você a experimentar.";

            document.getElementById("conteudo1").innerHTML =
                `<h1 class="pergunta">
                    Dizer que não quer participar e mudar de assunto.
                </h1>`;

            document.getElementById("conteudo2").innerHTML =
                `<h1 class="pergunta">
                    Procurar um amigo ou adulto de confiança para conversar sobre a situação.
                </h1>`;

            document.getElementById("conteudo3").innerHTML =
                `<h1 class="pergunta">
                    Continuar conversando, mas deixar claro que não pretende experimentar.
                </h1>`;

            document.getElementById("conteudo4").innerHTML =
                `<h1 class="pergunta">
                    Aceitar para provar que você também faz parte do grupo.
                </h1>`;
        }


    if (etapa === 5) {

            document.getElementById("pergunta-principal").innerHTML =
                "Depois de algumas semanas praticando esporte, você percebe que está criando novos objetivos para o futuro. Porém, alguns colegas dizem que isso não vale a pena.";

            document.getElementById("conteudo1").innerHTML =
                `<h1 class="pergunta">
                    Continuar focado nos meus objetivos e seguir praticando o esporte.
                </h1>`;

            document.getElementById("conteudo2").innerHTML =
                `<h1 class="pergunta">
                    Conversar com pessoas que me apoiam e pensar nos meus próximos objetivos.
                </h1>`;

            document.getElementById("conteudo3").innerHTML =
                `<h1 class="pergunta">
                    Deixar meus objetivos de lado por um tempo e não pensar muito nisso.
                </h1>`;

            document.getElementById("conteudo4").innerHTML =
                `<h1 class="pergunta">
                    Abandonar meus objetivos para tentar acompanhar o grupo.
                </h1>`;

            document.getElementById("conteudo5").innerHTML =
                `<button class="btn-concluir" onclick="finalizar()">
                    Concluir
                </button>`;

            document.getElementById("card-principal")
                .classList.add("card-concluir");
    }

    }

}


function finalizar() {

    let boas = 0;
    let medias = 0;
    let ruins = 0;


    escolhas.forEach(function(escolha) {

        if (escolha === 0 || escolha === 1) {
            boas++;
        }

        else if (escolha === 2) {
            medias++;
        }

        else if (escolha === 3) {
            ruins++;
        }

    });


    let mensagem = "";


    if (boas === 5) {

        mensagem = `
            <h1>🌟 Excelentes escolhas!</h1>

            <p>
                Você demonstrou que sabe buscar alternativas positivas
                diante de situações difíceis. Procurar apoio, manter
                bons vínculos e praticar atividades saudáveis são
                atitudes importantes para o bem-estar.
            </p>
        `;

    }

    else if (boas >= 3) {

        mensagem = `
            <h1>💙 Você está no caminho certo!</h1>

            <p>
                A maioria das suas escolhas foi positiva. Você mostrou
                que entende a importância de cuidar de si, manter boas
                relações e procurar ajuda quando necessário.
            </p>
        `;

    }

    else if (medias >= 3) {

        mensagem = `
            <h1>🤔 Que tal refletir sobre suas escolhas?</h1>

            <p>
                Algumas das suas decisões poderiam ser diferentes.
                Em momentos difíceis, conversar com alguém de confiança
                e procurar apoio pode ajudar a encontrar caminhos mais
                seguros e saudáveis.
            </p>
        `;

    }

    else if (ruins >= 3 && ruins < 5) {

        mensagem = `
            <h1>⚠️ Fique atento às suas escolhas</h1>

            <p>
                Algumas escolhas podem trazer consequências negativas.
                Lembre-se de que você não precisa enfrentar situações
                difíceis sozinho. Procurar ajuda e manter vínculos
                positivos são atitudes importantes.
            </p>
        `;

    }

    else if (ruins === 5) {

        mensagem = `
            <h1>🛑 É importante repensar suas escolhas</h1>

            <p>
                Suas escolhas mostram que você pode se beneficiar de
                mais apoio diante de situações difíceis. Conversar com
                um amigo, familiar, professor ou outro adulto de
                confiança pode ajudar a encontrar alternativas mais
                seguras.
            </p>
        `;
    }


    document.getElementById("area-jogo").style.display = "none";

    document.getElementById("opcoes").style.display = "none";

    document.getElementById("area-progresso").style.display = "none";

    document.getElementById("card-principal")
    .classList.remove("card-concluir");

    document.getElementById("card-principal")
        .classList.add("card-resultado");


    document.getElementById("resultado").innerHTML = `
        
        ${mensagem}

        <button onclick="location.reload()" class="btn-jogar-novamente">
            Jogar novamente
        </button>`;

    document.getElementById("resultado").style.display = "flex";

}