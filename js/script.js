// /* ============================== Typing Animation ============================ */
// let typed = new Typed(".typing",{
//     strings:["","une web dev' en devenir !","oune artiste","une étudiante dans la promo Z n°3",", je suis ?"],
//     typeSpeed:100,
//     BackSpeed:60,
//     loop:true
// });

// /* ============================== Aside Active Tab ============================ */
// const nav = document.querySelector(".nav"),
//         navList = nav.querySelectorAll("li"),
//         totalNavList = navList.length;
//         for(let index=0; index < totalNavList; index++) {
//            // console.log(navList[index]);
//            const a = navList[i].querySelector("a");
//            a.addEventListener("click", function(){
//                for(let j=0; j < totalNavList; j++){
//                    navList[j].querySelector("a").classList.remove("active");
//                }
//                this.classList.add("active");
//            })
//         };=

/* ============================== API Fetch ============================ */
let usersAPI = document.getElementById('usersAPI');

fetch("https://jsonplaceholder.typicode.com/users")
    .then(reponse => reponse.json())
    .then(function (reponse2) {
        for (index = 0; index < reponse2.length; index++) {
            usersAPI.innerHTML +=
                `
        <div>
            <h4> Infos </h4>
            <div class="left">
                <h5> ${reponse2[index].name} ${reponse2[index].username}</h5>
                <p> ${reponse2[index].email} </p>
            </div>
            <div class="right">
                <h5> Adresse : </h5>
                <p> ${reponse2[index].address.street} </p>
                <p> ${reponse2[index].address.suite} </p>
                <p> ${reponse2[index].address.city} </p>
            </div>
        </div>
       `
            // console.log( reponse2[index]["name"])
            // console.log( reponse2[index]["username"])
            // console.log( reponse2[index]["email"])
            // console.log( reponse2[index]["address"])
        }
    });
