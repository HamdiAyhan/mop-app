import { modlar } from "./veri.js";


 const koketiket = document.querySelector("#kok-etiket")
function UIGoster (){
modlar.forEach((deger , index)=>{
    const yenidiv=document.createElement("div")
    yenidiv.classList.add("yenidiv")
    yenidiv.textContent=deger.tr
   
    const yeniIMG =document.createElement("img")
    yeniIMG.src='../IMAGE/'+deger.mod + '.jpg'

    const yeniSes =document.createElement("audio")
    yeniSes.src='../AUDIO/'+deger.mod + '-sound.mp3'
    yeniSes.loop=true
    
    yenidiv.append(yeniSes)
    yenidiv.append(yeniIMG)
    koketiket.append(yenidiv)

    yenidiv.addEventListener('click',()=>{
        if (yeniSes.paused === true){
         yeniSes.play()
         yenidiv.classList.add("aktif")
        } else{
          yeniSes.pause() 
          yenidiv.classList.remove("aktif")
        }
        
    })
})
}
export {UIGoster}