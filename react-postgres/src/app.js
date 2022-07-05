import React, {useState, useEffect} from "react";

function App() {
    const [merchants, setMerchants] = useState(false)
    useEffect(() => {getMerchant()},[])

    function getMerchant() {
        fetch('http;://localhost:3001')
            .then(response => {
                return response.text()
            })
            .then(data => {
                setMerchants(data)
            })
    }



}