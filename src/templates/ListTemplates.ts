import FullList from "../model/FullList"
import type ListItem from "../model/ListItem";

interface DOMList{
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList):void
}

export default class ListTemplate implements DOMList{
    static instance: ListTemplate = new ListTemplate(); //singleton
    ul: HTMLUListElement;

    private constructor(){
        //initialize ul as the listItems element in index.html
        this.ul = document.getElementById("listItems") as HTMLUListElement;
    }

    clear(): void{
        this.ul.innerHTML = "";
    }

    render(fullList: FullList): void {
        this.clear(); //clear current display to avoid repetition

        const itemList: ListItem[] = fullList.list;
        itemList.forEach(listItem => {
            //create li element
            const li = document.createElement("li");
            li.setAttribute("class", "item");

            //create input checkbox element
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = listItem.id;
            checkbox.tabIndex = 0;
            checkbox.checked = listItem.checked;
            li.appendChild(checkbox);

            
            checkbox.addEventListener('change', () => {
                listItem.checked = !listItem.checked;
                fullList.save();
            })

            //create label element
            const label = document.createElement("label");
            label.htmlFor = listItem.id;
            label.textContent = listItem.item;
            li.appendChild(label);

            //create remove button
            const button = document.createElement("button");
            button.className = 'button';
            button.textContent = 'X';
            li.appendChild(button);

            button.addEventListener('click', () => {
                fullList.removeItem(listItem.id);
                this.render(fullList); //update list display after removal
            })

            this.ul.appendChild(li)
        })
    }
}