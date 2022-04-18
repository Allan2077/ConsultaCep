const cep = document.querySelector("#cep")

//Aqui foi feito um FORIN para preencher todos os campos ao colocar o cep//

const showData = (result) => {
    for(const campo in result){
        if(document.querySelector("#"+campo)){

          document.querySelector("#"+campo).value = result[campo]
        }
    }
}





/*Esse evento 'blur' é para assim que a pessoa tirar o foco saber o que foi criado, digitou o 
Cep deu um TAB já mostra no console*/ 

cep.addEventListener("blur",(e)=>{
    //Essa variavel 'search' foi criada para substituir o '-' do CEP por nada//
    let search = cep.value.replace("-","")

    //Consultar uma URL remota, precisamos do 'CORS'
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    //Peguei essa URL no 'ViaCep.com.br' e substitui o número após o 'ws/' por '${search}'//
    fetch(`https://viacep.com.br/ws/${search}/json/`)

    //Retorno da promessa por ser Assincrono, saiu do nosso controle, é a promessa certo usamos '.then'
    .then(response=>{
        response.json()
        .then( data => showData(data))
    })

    //Errado usamos o CATCH//
    .catch(e => console.log('Deu Erro: '+ e,message))

})


