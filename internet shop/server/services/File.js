// используем пакет uuid для генерации уникального имени файла
import * as uuid from 'uuid'
import * as path from 'path'
import fs from 'fs'

class File {
    save(file) {
        if (!file) return null
        const [, ext] = file.mimetype.split('/')
        const filename = uuid.v4() + '.' + ext
        const filePath = path.resolve('static', filename)
        file.mv(filePath)
        return filename
    }
    delete(file) {
        if (file) {
            const filePath = path.resolve('static', file)
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath)
            }
        }
    }
}

export default new File()