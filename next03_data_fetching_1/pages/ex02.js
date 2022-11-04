
export default function MoviesEx02({data}){
    return(
            <div>
                <h2>Exercício 02</h2>
                <div>
                    {data.Search.map((m) => <div> <strong>{m.Title} {m.Year}</strong> <br/> <img src={m.Poster}></img></div>)}
                </div>
                
            </div>
        )
}

export async function getServerSideProps(context){
    const res = await fetch("http://www.omdbapi.com/?apikey=7e085129&s=Star Wars")
    const data = await res.json()
    return{
        props: {
            data
        }
    }
}