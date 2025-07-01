import multer from 'multer'
import fs from 'fs'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = './uploads'
    if(!fs.existsSync(dir)){
      fs.mkdirSync(dir)
    }
    cb(null, dir)
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '.' + file.originalname.split('.')[1])
  }
})

export const upload = multer({ storage: storage })
