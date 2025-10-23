import React from 'react';

const Footer = () => {
    return (
        <div className="base-footer">
            <div className="base-footer__main">
                <ul className="listcontact">
                    <h4>ООО «СИБТРАНССЕРВИС» Ленинск-Кузнецкий</h4>
                    <li className="cont-phone">
                        Приемная: +7 (38456) 5-31-29, отдел кадров: 5-31-30,
                        коммерческий отдел: 5-31-31
                    </li>
                    <li className="cont-phone">Факс: +7 (38456) 5-31-28</li>
                    <li className="cont-email">
                        <a href="mailto:priemnay@sibtranss.ru">
                            priemnay@sibtranss.ru
                        </a>
                    </li>
                    <li className="cont-adress">
                        Россия, г. Ленинск-Кузнецкий, ул. Зорина 8б
                    </li>
                </ul>
                <ul className="listcontact">
                    <h4>ООО «СИБТРАНССЕРВИС» Новокузнецк</h4>
                    <li className="cont-phone">Приемная: 8(3843)37-36-65</li>
                    <li className="cont-email">
                        <a href="mailto:priemnay@sibtranss.ru">
                            sibtransservis@yandex.ru
                        </a>
                    </li>
                    <li className="cont-adress">
                        Россия, Г. Новокузнецк, проезд Ферросплавный 15
                    </li>
                    
                </ul>
                {/*</div>*/}
            </div>

        </div>
    );
};

export default Footer;