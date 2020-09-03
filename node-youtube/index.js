// const chalk = require('chalk')
// const text = require('./data')

// console.log(chalk.blue('Hello NodeJS'));
// console.log(chalk.blue(text));

//Создание собственного веб сервера.
const http = require('http') //подключаем модуль http
const fs = require('fs')
const path = require('path')


const server = http.createServer( (req, res) => {
    

    // console.log(req.url);
    
    //****************************************************** */
    //обращение к странице html
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    //         if (err) {
    //          throw err
    //         }

    //         res.writeHead(200, {
    //          'Content-Type': 'text/html'
    //         }) 
    //         res.end(data)
    //     })        
    // }   else if (req.url === '/') {
    //         fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
    //          if (err) {
    //           throw err
    //          }

    //             res.writeHead(200, {
    //              'Content-Type': 'text/html'
    //             }) 
    //             res.end(data)
    //         })        
    //         }   
    //****************************************************** */
    // res.end('Hello NodeJS')
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filePath)
    let contentType = 'text/html'
    // console.log(filePath);
// проверка расширения у файла
    switch(ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/js'
            break
        default:
            contentType = 'text/html'
    }
//добавление расширения к файлу
    if (!ext) {
        filePath += '.html'
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Error')
                } else {
                  res.writeHead(200, {
                    'Content-Type': 'text/html'
                  })
                  res.end(data)
                }
            })
        } else {
          res.writeHead(200, {
            'Content-Type': contentType
          })
          res.end(content)  
        }
    })    
})

const PORT = process.env.PORT || 3000

server.listen(3000, () => {
    console.log(`Server has been started on ${PORT}...`);
})