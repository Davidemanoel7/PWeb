
export default function MoviesEx03({data}){
    return(
            <div>
                <h2>Exercício 03</h2>
                <input id="searchBox" type="text" placeholder="search here..."></input>
                <button onClick={() => alert("Clicou...")}>Search</button>
                <div>
                    {data.Search.map((m) => <div>{m.Title} - {m.Year}</div>)}
                </div>
            </div>
        )
}

export async function getServerSideProps(context){
    const res = await fetch("http://www.omdbapi.com/?apikey=7e085129&s=Star wars")
    const data = await res.json()
    return{
        props: {
            data
        }
    }
}