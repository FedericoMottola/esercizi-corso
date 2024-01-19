import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import '../index.css'


const Main = () => {

    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSearch = () => {
        navigate('/risultati?cerca=' + search)
    }

 

    return (
        <div className='app root'>
        <div className="search">
        <input 
        value={search} onChange={(e) => setSearch(e.target.value)}
        placeholder='Inserisci la tua località'
        type="text" />
     

            
            <button onClick={handleSearch} className="btn btn-success">Cerca</button>
            
        </div>
        </div>
    )
}

export default Main