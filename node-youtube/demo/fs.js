//File System
const fs = require('fs')
const path = require('path')

//Создание папки test
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err
//     }

//     console.log('Папка создана');
// })

//*************************************************** */
//Создание файла text.txt
const filePath = path.join(__dirname, 'test', 'text.txt')
//Запись в файл
// fs.writeFile(filePath, 'Hello NodeJS', err => {
//     if (err) {
//         throw err
//     }

//     console.log('Файл создан');
// })

// fs.appendFile(filePath, '\nHello Again', err => {
//     if (err) {
//         throw err
//     }

//     console.log('Файл создан');
// })

//Чтение инфо из файла
//1 вариант перевода из буфера в текст
// fs.readFile(filePath, (err, content) => {
//     if (err) {
//         throw err
//     }

    // const data = Buffer.from(content)
    // console.log('Content1: ', data.toString()); //перевод буфера в строку
// })

//2 вариант перевода из буфера в текст
//добавление строкового параметра кодировки UTF-8
fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }
    console.log('Content2: ', content); //перевод буфера в строку
})
