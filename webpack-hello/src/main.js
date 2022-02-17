import React from "react"
import click from "./game"
import loader from './loader';

function main() {

    return (
    <React.Suspense fallback={<loader/>}>
    </React.Suspense>
    )
}

export default main


// const button = document.getElementById('button')
// button.addEventListener('click', function () {
//     click()
// })

// setTimeout(() => {loader()}, 3000)