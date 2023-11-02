document.addEventListener("DOMContentLoaded", () => {

    function select(id, list) {
        const e = document.createElement("select");
        e.id = id;

        const defaultOption = document.createElement("option");
        defaultOption.innerText = "Select One";
        e.appendChild(defaultOption); //put it in the list
        e.selectedIndex = 0; //Select First item as default

        for (let i = 0; i < list.length; i++) {
            const o = document.createElement("option"); // const defines o and makes it a variable
            o.innerText = list[i];
            e.appendChild(o);
        }

        return e;
    }
    const categoriesSelect = select("categories", categories);
    document.body.appendChild(categoriesSelect);

    function objectSelect(id, list, category) {
        const e = document.createElement("select");
        e.id = id;

        const defaultOption = document.createElement("option");
        defaultOption.innerText = "Select One";
        e.appendChild(defaultOption); //put it in the list
        e.selectedIndex = 0; //Select First item as default

        for (let i = 0; i < list.length; i++) {
            const item = list[i]
            if (item.category == category) {
                const o = document.createElement("option"); // const defines o and makes it a variable
                o.innerText = item.name;
                o.value = item.id;
                e.appendChild(o);
            }
        }

        return e;


    }
    function submitForm(e){
        e.preventDefault();
        let div = document.getElementById("message");
        if (div != undefined) {
            div.remove();
        }

        const amount = Number(quantity.value) * Number(price.value);
        div = document.createElement("div");
        div.innerHTML = `"
            Your credit card has been charged $${amount}
             for ${quantity.value} 
             to ${itemName.value}. 
             A confirmation email has been sent to ${email.value}. `
        document.body.appendChild(div)
    };



    function displayform(item) {
        let f = document.getElementById("form");

        if (f != undefined) {
            f.remove();
        }
        if (item.price == 0) {
            return;//Exit we are done
        }
        f = document.createElement("form");
        f.id = "form";


        f.innerHTML = `
            <fieldset>
            <legend> E-Ticket Purchase Form </legend>
            <label>the number of tickets needed <input type="number" id="quantity" value="2"></label><br>
            <label>a credit car number <input></label><br>
            <label>an email address <input type="email" id="email"></label><br>
            <input type="submit" value="Purchase">
            <input type="reset" value="clear">
            </fieldset>
            <input type="hidden" id="price" value="${item.price}">
            <input type="hidden" id="itemName" value="${item.name}">
            `;
        
            f.addEventListener("submit", submitForm)
        document.body.appendChild(f);
    }
    function displayActivity(id, list) {
        for (let i = 0; i < list.length; i++) {
            const item = list[i];
            if (item.id == id) {
                let d = document.getElementById("display");
                if (d != undefined) {
                    d.remove();
                }
                d = document.createElement("pre");
                d.id = "display";
                d.innerHTML = `
${item.id}
${item.name}
${item.description}
${item.location}
${item.price}
                `
                document.body.appendChild(d);
                displayform(item)

            }
        }
    }



    categoriesSelect.addEventListener("change", (e) => {
        const items = document.getElementById("items");
        if (items != undefined) {
            items.remove();
        }
        const activitiesSelect = objectSelect("items", activities, e.target.value)
        document.body.appendChild(activitiesSelect);

        activitiesSelect.addEventListener("change", (e) => {
            displayActivity(e.target.value, activities);
        })//Second list change

    });//End Change

})//End DOM CONTENT LOADED