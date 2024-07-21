import { useEffect, useState } from "react"


export function AllCards() {

    const [cards,setCards] = useState('undefined');  

    useEffect(() => {
        const fetchAllCard = async() =>{
        try {
        const response = await fetch('http://127.0.0.1:3000/api/cards',{method:'GET'});
        const data = response.json(); 
        setCards(data.data); 
        } catch (err) {
            console.log(err.message);
        }   
    }
    fetchAllCard();
},[])
    return (
        <div className="AllCards">
        <h3>AllCards</h3>    
        {
            cards? 
               cards.map(cards => <div key={cards.id}>{cards.title}</div>) 
            : 
            'no cards yet'
        }    
        </div>
    )
}
