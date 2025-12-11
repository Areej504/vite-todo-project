import ListItem, { type Item } from './ListItem'

interface List{
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: String): void
}

export default class FullList implements List{

    static instance: FullList = new FullList() //singleton with 1 instance of the list

    private _list: ListItem[] =[]

    private constructor(){}

    get list(): ListItem[] {
        return this._list;
    }

    set list(newList: ListItem[]){
        this._list = newList;
    }

    load(): void {
        const storedList = localStorage.getItem("myList");
        if(!storedList) return;

        const parsedList: Item[] = JSON.parse(storedList);

        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj.id, itemObj.item, itemObj.checked);
            this.addItem(newListItem);
        })
    }
    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list));
    }
    clearList(): void {
        this._list = [];
        this.save();
    }
    addItem(itemObj: ListItem): void {
        this.list.push(itemObj);
        this.save();
    }
    removeItem(id: String): void {
        this._list = this._list.filter(item => item.id !== id);
        this.save();
    }
    
}