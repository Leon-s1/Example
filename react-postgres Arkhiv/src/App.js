import React, {useState, useEffect} from "react";

function App() {
    const [merchants, setMerchants] = useState(false)
    useEffect(() => {getMerchant()},[])

    function getMerchant() {
        fetch('http;://localhost:3000')
            .then(response => {
                return response.text()
            })
            .then(data => {
                setMerchants(data)
            })
    }

    function createMerchant() {
        let name = prompt('Enter merchant name')
        let email = prompt('Enter merchant email')
        fetch('http://localhost:3000/merchant', {
            method: 'POST',
            headers: {
                'Contet-Type': 'application/json'
            },
            body: JSON.stringify(name, email)
        })
            .then(response => {
                return response.text()
            })
            .then(data => {
                alert(data)
                getMerchant()
            })
    }
    function deleteMerchant() {
        let id = prompt('Enter merchant id')
        fetch(`http://localhost:3000/merchants/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                response.text()
            })
            .then(data => {
                alert(data)
                getMerchant()
            })
    }
    return (
        <div>
            {merchants ? merchants : 'There is no merchant data available'}

            <button onClick="{createMerchant}">Add merchant</button>

            <button onClick="{deleteMerchant}">Delete merchant</button>;
        </div>
    )
}
    export default App
