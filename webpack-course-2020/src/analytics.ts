import * as $ from 'jquery'         //подключаем библиотеку jquery

function createAnalytics(): object {    //функция считает клики по документам
    let counter = 0
    let isDestroyed: boolean = false
    
    const listener = ():number => counter++

    // document.addEventListener('click', listener)        
    $(document).on('click', listener)        //запись с использованием библиотеки jquery

    return {
        destroy() {     //метод удаляет данную аналитику
            // document.removeEventListener('click',listener)
            $(document).off('click',listener)
            isDestroyed = true
        },

        getClicks() {   //метод показывает количество кликов на документе
            if (isDestroyed) {
                return `Analytics is destroyed. Total clicks = ${counter}`
            }
            return counter
        }
    }
}

window['analytics'] = createAnalytics()