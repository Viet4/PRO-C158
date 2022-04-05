AFRAME.registerComponent("cursor_event", {
    schema: {
        selectedItemId: {type:"string", default:""}
    },
    init: function(){
        this.handleMouse();
    },
    handleMouse: function(){
        this.el.addEventListener("mouseenter", ()=>{
            this.selectedItem(true);
        });
        this.el.addEventListener("mouseleave", ()=>{
            this.selectedItem(false);
        });
    },
    selectedItem: function(selected){
        const id = this.el.getAttribute("id");
        const comicsId = ["spider-man", "ant-man", "gotg", "captain-america"];

        if (comicsId.includes(id)){
            const comicsContainer = document.querySelector("#comics-container");
            comicsContainer.setAttribute("cursor_event", id);

            var color;
            if (selected) {color = "#007CE0"}
            else {color = "#FFF"};
            
            this.el.setAttribute("material", {color: color});
        }
    }
});