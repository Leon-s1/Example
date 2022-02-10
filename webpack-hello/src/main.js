import React from "react"
import click from "./game"
import loader from './loader';



return (
    <React.Suspense fallback={<loader />}>
    {/*setTimeout(() => {<loader/>, 3000})*/}


    const button = document.getElementById('button')
    button.addEventListener('click', function () {
    click()
})
    </React.Suspense>
)


