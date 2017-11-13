l = function(d) {
    console.log(d);
}  
// -- DOM est prêt !
// -- 1. Récupération des Articles
$.getJSON('https://jsonplaceholder.typicode.com/posts', function(articles) {
    /* Aperçu dans la console */
    console.log('articles');

    // -- A. 1ére solution : La Boucle FOR
    for(let i = 0 ; i < 10 ; i++) {

        // -- Je récupère à chaque itération, un objet dans ma boucle
        let article = articles[i];

        // -- Affichage dans ma page HTML
        $(
            <section>
                <header>
                    <h1>${artcicle.title}</h1>
                </header>
                <article>
                    ${article.body}
                </article>
            </section>
        ).appendTo($('main'));
    } // .()for}); 
}); 
    
