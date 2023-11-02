document.addEventListener("DOMContentLoaded", ()=>{

    function select(id, list){
        const e = document.createElement("select");
        e.id = id;
        const defaultOption = document.createElement("option");
        defaultOption.innerText = "Select One";
        e.appendChild(defaultOption); //put it in the list
        e.selectedIndex = 0; //Select First item as default

        for(let i = 0; i < list.length; i++){
            const o = document.createElement("option"); // const defines o and makes it a variable
            o.innerText = list[i];
            e.appendChild(o);
        }

        return e;
    }
    const categoriesSelect = select("categories", categories);
    document.body.appendChild(categoriesSelect);

    categoriesSelect.addEventListener("change", (e)=>{
        alert( e.target.value);
    });//End Change

})//End DOM CONTENT LOADED