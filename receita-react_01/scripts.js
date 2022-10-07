let cervejas = []

const tabelaBebidas = (array) =>{
    const tab = array.map(({name,alcohol,malts,brand}) => `<tr> <td>${name}</td> <td>${alcohol}</td> <td>${malts}</td> <td>${brand}</td> </tr>`).join("\n");
    return `<table><tbody>${tab}</tbody></table>`
}

async function carregarCervejas(){
    try{let res = await fetch("https://random-data-api.com/api/v2/beers?size=10")
        cervejas = await res.json()
        tabBebidas(cervejas)    
    }catch(err){
    alert("Recarrege a página macho...")
    }
}

const tabBebidas = cs =>{
    const itensHtml = cs.map( ({name,alcohol,malts,brand}) => `<tr> <td>${name}</td> <td>${alcohol}</td> <td>${malts}</td> <td>${brand}</td> </tr>` ).join("\n")
}


const Cabecalho = () => {
    return <h1>Minha tabela de bebidas</h1>   
 }

 const TabelaBebidas = () => {
    return <div id="app">
       <table id="tabela" border="1">
          <thead>
             <tr><th>Nome</th><th>Marca</th></tr>
          </thead>
          <tbody>
             <tr><td>Havana</td><td>Engenho Anísio Santiago</td></tr>
          </tbody>
       </table>
    </div>
 }

 ReactDOM.render(
    <div>
       <Cabecalho/>
       <TabelaBebidas/>
    </div>
    ,
    document.getElementById("app")
 )