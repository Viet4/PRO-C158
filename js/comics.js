AFRAME.registerComponent("comics", {
    init: function(){
        this.comicsContainer = this.el;
        this.createComics();
    },
    createComics: function(){
        const comicPosterRef = [{
            id: "spider-man",
            title: "the Amazing Spider-Man",
            url: "./assets/spiderman.jpg",
        },{
            id: "ant-man",
            title: "Ant-Man and the Wasp",
            url: "./assets/antman.jpg",
        },{
            id: "gotg",
            title: "Guardians of the Galaxy",
            url: "./assets/gotg.jpg",
        },{
            id: "captain-america",
            title: "Captain America",
            url: "./assets/captainamerica.jpg",
        },];

        let previousXPosition = -43.875;

        for (var item of comicPosterRef){
            const posX = previousXPosition + 17.5;
            const posY = 0;
            const posZ = -30;
            const position = {x:posX, y:posY, z:posZ};
            previousXPosition = posX;

            const borderEl = this.createBorder(position, item);
            const comicPosterEl = this.createPoster(item);
            const titleEl = this.createTitle(item);
            borderEl.appendChild(comicPosterEl);
            borderEl.appendChild(titleEl);

            this.comicsContainer.appendChild(borderEl)
        }
    },
    createBorder(position, item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", item.id);
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("geometry", {primitive:"plane", width: 10, height: 15});
        entityEl.setAttribute("material", {color: "#FFF"});
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("cursor_event", {})
        return entityEl;
    },
    createPoster(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("geometry", {primitive:"box", width: 9, height: 14, depth:0.1});
        entityEl.setAttribute("material", {src: item.url});
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
    createTitle(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("position", {x:0, y:-9, z:0});
        entityEl.setAttribute("text", {
            value: item.title,
            font: "aileronsemibold",
            color: "#000",
            align: "center",
            width: 30
        });
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
})