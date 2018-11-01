// import MD5 from '../../../node_modules/md5/'

var MD5 = require('md5.js')
 
// console.log(new MD5().update('42').digest('hex'))
// => a1d0c6e83f027327d8461063f4ac58a6
 
// var md5stream = new MD5()
// md5stream.end('42')


// const md5 = require('cryptojs')
// const MD5 = require('md5.js')
const md5 = new MD5()
const privateKey = 'f1b690b8e89d7f112c6f33f956693b2f91d93400'
const publicKey = 'a4d95911b60999871aaed8a8c43823f6'
const timeStamp = Date.now

const hash = md5.update(timeStamp + privateKey + publicKey).toString()

export const url = `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`