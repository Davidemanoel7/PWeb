
export default function MoviesEx01({data}){
    return(
            <div>
                <h2>Exercício 01</h2>
                <div>
                    {data.Search.map((m) => <div>{m.Title} - {m.Year}</div>)}
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