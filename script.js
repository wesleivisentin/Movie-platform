
//SELECIONANDO A LISTA (UL) DO MEU HTML
const listaFilme = document.querySelector(".listaFilme")   //seleciona documento html e seleciona o elemento q tenha essa classe

//FUNÇÃO QUE VAI LISTAR OS FILMES
function listarFilmes(colecaoFilmes) {

    //LIMPAR VITRINE HTML
    listaFilme.innerHTML = ""


    //1 ACESSAR OS filmes
    //2 LOOP PARA ENCONTRAR OS filmes 
    //3 MONTAR UM TAMPLETE (LI)
    //4 MOSTRAR NA TELA

    //ACESSANDO A COLEÇÃO DE FILMES(ARRAY) -> PASSANDO PARA FUNÇÃO TEMPLATE
    colecaoFilmes.forEach(function(filme) {

        //PASSANDO CADA UM DOS FILMES  => PARA CRIAR O TEMPLATE DE CADA FILME
        const template = criarTemplate(filme)

        //ADICIONANDO O FILME DE FORMA PESSOAL
        listaFilme.appendChild(template)

    })
}

listarFilmes(filmes)
//FUNÇAO QUE CRIA O TEMPLATE(li)

function criarTemplate(filme) {
    //1 - FILME
    //NOME
    //IMAGEM
    //2 - CRIAR LI
    //3 - RETORNAR ESSE TEMPLATE COM O FILME

    //filme.nome
    //filme.url 

    //criando templete do tipo html

    const li = document.createElement("li")

    //ADICIONANDO UMA ESTRUTURA HTML PARA DENTRO DO (LI)
    li.innerHTML = `
                    <figure>
                        <img src="${filme.url}" alt="
                        ${filme.nome}"/>
                        <h2>${filme.nome}</h2>
                    </figure>
                    `
    return li
}

//FILTRAR FILME POR CATEGORIA
function filtrarFilme(filtrocategoria){
    //LOOP PARA FILTRAR FILMES
    const filmesFiltrados = filmes.filter(function(filme){


        if(filtrocategoria === filme.categoria){
            
                return filme
        }
    })

    listarFilmes(filmesFiltrados)
}


//SELECIONANDO MENU
const secaocategorias = document.querySelector(".secaoCategorias")

    //ADICIONANDO UM INTERCEPTOR DE EVENTO
    secaocategorias.addEventListener("click", function(event){
       
       
        //CANCELAR EVENTO DO LINK => NÃO CARREGA A TELA
        event.preventDefault()

        //ONDE FOI CLICADO
        const categoriaSelecionada = event.target.text
        if(categoriaSelecionada == "Mostrar Todos"){
            listarFilmes(filmes)
        }else{
            filtrarFilme(categoriaSelecionada)
        }
    })
