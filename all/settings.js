require("./module")

global.owner = "94770378874" //PAKE NO LU BIAR BISA ADD AKSES
global.namabot = "queen-sakura v2" //NAMA BOT GANTI
global.namaCreator = "darkhyper" //NAMA CREATOR GANTI AJA
global.autoJoin = false //NOT CHANGE / JANGAN GANTI
global.antilink = true //NOT CHANGE / JANGAN GANTI
global.versisc = '1.0.0' //NOT CHANGE / JANGAN GANTI
global.codeInvite = ""
global.imageurl = 'https://telegra.ph/file/d8a0346aa59d5eb19f0d2.jpg' //GANTI PP MU MENGGUNAKAN LINK TELEGRA PH
global.isLink = 'https://chat.whatsapp.com' ///GANTI MENGGUNAKAN LINK GRUBMU YA
global.thumb = fs.readFileSync("./thumb.png") ///NOT CHANGE / JANGAN GANTI
global.audionya = fs.readFileSync("./all/sound.mp3") //NOT CHANGE / JANGAN GANTI
global.packname = "queen-sakura v2" //GANTI AJ
global.author = "queen-sakura v2" //GANTI SERAH MU
global.jumlah = "5" ////NOT CHANGE / JANGAN GANTI

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
