import React, {useEffect} from "react";
import Loader from "../Loader";

const Rekvizit = () => {
    // const [users, setUsers] = useState(false);
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);

    const Rekvizity = () => {
        return (
            <div className="Rekvizit">
                <p>652502, Кемеровская обл. - Кузбасс, г. Ленинск-Кузнецкий, ул. Зорина, 8б</p>
                <p>Генеральный директор - Пилюгин Михаил Владимирович
                    действующий на основании Устава</p>
                <p>ИНН 4236004123</p>
                <p>КПП 421201001</p>
                <p>Расчетный счет № 40702810926180100505</p>
                <p>Кемеровское отделение № 8615 ПАО «Сбербанк России» г. Кемерово </p>
                <p> Кор. счет № 30101810200000000612 </p>
                <p>БИК 043207612 </p>
                <p>ОГРН 1024201305963 </p>
                <br/>
            </div>
        )

    }

    return (
        <div>
            <h1>Карточка компании ООО «Сиб<span style={{color: 'red'}}>транс</span>сервис»</h1>
            {loading && <Loader/>}
            {loading ? null : (
                <Rekvizity/>
            )}
        </div>
    )
}

export default Rekvizit