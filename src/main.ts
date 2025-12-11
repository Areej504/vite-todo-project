import './css/style.css'
import ListTemplate from './templates/ListTemplates';
import FullList from './model/FullList';
import ListItem from './model/ListItem';

const initApp = (): void=>{
  const fullList = FullList.instance;
  const template = ListTemplate.instance;

  //entry form handler
  const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement;
  itemEntryForm.addEventListener('submit', (event: SubmitEvent): void => {
    event.preventDefault()

    const input = document.getElementById("newItem") as HTMLInputElement;
    const newEntryText: string = input.value.trim();
    if(!newEntryText.length){return} //dont add empty items

    //calculate item id
    const itemId: number = fullList.list.length ? parseInt(fullList.list[fullList.list.length - 1].id) + 1 : 1;
    const newItem: ListItem = new ListItem(itemId.toString(), newEntryText);

    fullList.addItem(newItem);
    template.render(fullList);

  })

  //clear button Handler
  const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement;
  clearItems.addEventListener('click', (): void=>{
    fullList.clearList();
    template.clear();
  })

  fullList.load();
  template.render(fullList);
}

document.addEventListener("DOMContentLoaded", initApp)