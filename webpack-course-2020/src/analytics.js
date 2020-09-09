function createAnalytics() {    //функция считает клики по документам
    let counter = 0
    let isDestroyed = false
    
    const listener = () => counter++

    document.addEventListener('click', listener)

    return {
        destroy() {     //метод удаляет данную аналитику
            document.removeEventListener('click',listener)
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

window.analytics = createAnalytics()