>"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "🏎️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝐇𝐞𝐲 𝐓𝐡𝐢𝐬 𝐢𝐬 *ENZO 𝐌𝐝* \n ' + "𝐓𝐡𝐞 𝐅𝐚𝐬𝐭𝐞𝐬𝐭 𝐖𝐚𝐁𝐨𝐭";
    let d = '> 𝑩𝒚 *ENZO*'
    let varmess = z + d;
    var img = 'https://i.ibb.co/BNvstq2/IMG-20240916-WA0016.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *Zokou* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Djalega++*'
      let varmess=z+d
      var img='https://telegra.ph/file/ee29736dc8aa587cdf145.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
