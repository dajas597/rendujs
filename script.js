//n'oubliez pas de chnger l'URL entre les parenthèses
fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/chocolatier.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load JSON data');
        }
        return response.json();
    })
    .then(data => {
       //ici vous ecrivez votre code
       let Accueil = document.getElementById("Accueil");
       let prod = document.getElementById("Produit");
       let Clients = document.getElementById("Clients");
       
       let h1 = document.createElement("h1");
       h1.textContent=data.nomEntreprise;
       console.log(h1);
       
       let p = document.createElement("p");
       p.textContent=data.slogan
       
       let btnA = document.createElement("button");
       btnA.textContent=data.bouton
       let ul = document.createElement("ul");

       Accueil.appendChild(h1);
       Accueil.appendChild(p);
       Accueil.appendChild(btnA);
       Accueil.appendChild(ul);

       data.listeBeneficesClients.forEach(element => {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = element;
       });

       let h2p = document.createElement("h2");
       h2p.textContent="Produits";
       let btnP1 = document.createElement("button");
       btnP1.textContent="Afficher"
       let btnP2 = document.createElement("button");
       btnP2.textContent="Masquer"
      prod.appendChild(h2p);
      prod.appendChild(btnP1);
      prod.appendChild(btnP2);
    
       btnP1.addEventListener("click", function() {

        
        let div = document.createElement("div");
        div.className="produits-container";
        prod.appendChild(div);
       data.produits.forEach(element => {
        let div1 = document.createElement("div")
        div.appendChild(div1)
        div1.setAttribute("class","divcss")
        let h3 = document.createElement("h3");
        h3.textContent=element.titre
        div1.appendChild(h3);
        let p = document.createElement("p");
        p.textContent=element.presentation
        div1.appendChild(p);
        let img = document.createElement("img");
        img.src = element["image-url"];
        div1.appendChild(img)

        
    });
    
    
    
    
})

btnP2.addEventListener("click", function () {
    
    let container = document.querySelector(".produits-container");
    if (container) {
        container.remove();
    }
});
let divcli = document.createElement("div");
    divcli.className="avis-container";
    Clients.appendChild(divcli);

let h2c = document.createElement("h2");
   h2c.textContent="Avis Clients"
   Clients.appendChild(h2c);
       data.clients.forEach(element => {
   
    let div = document.createElement("div");
    divcli.appendChild(div);
    let h3 = document.createElement("h3");
    h3.textContent=element.nom;
    div.appendChild(h3);
    let p1 = document.createElement("p");
    p1.textContent=element.typePrestation;
    div.appendChild(p1)
    let p2 = document.createElement("p");
    p2.textContent=element.commentaire;
    div.appendChild(p2)
    let p3 = document.createElement("p");
    p3.textContent=element.note+" etoile"
    div.appendChild(p3)
    
    
       
       });


    })
    .catch(error => console.error('Error:', error));
