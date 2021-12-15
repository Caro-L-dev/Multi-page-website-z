/* ============================== Typing Animation ============================ */
let typed = new Typed(".typing",{
    strings:["","une web dev' en devenir !","oune artiste","une étudiante dans la promo Z n°3",", je suis ?"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});

/* ============================== Aside Active Tab ============================ */
const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length;
        for(let index=0; index < totalNavList; index++) {
           // console.log(navList[index]);
           const a = navList[i].querySelector("a");
           a.addEventListener("click", function(){
               for(let j=0; j < totalNavList; j++){
                   navList[j].querySelector("a").classList.remove("active");
               }
               this.classList.add("active");
           })
        };