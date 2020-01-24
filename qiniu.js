const qiniuUploader = require('qiniu-qupload')
const [ak, sk] = process.argv.splice(2)

// node qiniu.js accessKey secretKey

qiniuUploader({
  ak,
  sk,
  src_dir: './.nuxt/dist/client',
  bucket: 'file',
  overwrite: true,
  rescan_local: true,
  skip_suffixes: '.DS_Store,.map',
  key_prefix: 'mahoo/',
  log_file: 'qnupload.log',
  log_stdout: true,
  file_type: 0
})
