import React from "react";
import CardComponent from "../../components/CardComponent";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
//import { useSelector, useDispatch } from "react-redux";



const CharacterDetail = () => {
    const [articulosventa, setArticulosventa] = useState({})
    let {id}= useParams();

    useEffect(()=>{
        fetch('https://api.github.com/users/' + id)
            .then((response)=>response.json())
            .then((json)=>setArticulosventa(json))
    },[id])

    //const dispatch = useDispatch(());
    

    return(
        <div id="idarticulosolo">
            <CardComponent articulosventa ={articulosventa} />
        </div>
    ) 

};

export default CharacterDetail;