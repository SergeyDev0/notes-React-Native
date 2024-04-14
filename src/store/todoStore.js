import { makeAutoObservable } from "mobx";

class TodoStore {
  activeCategory = 1;
  id = 5;
  idItem = null;
  isOpenMenu = false;
  isOpenEditor = false;
  isOpenAddItem = false;
  categories = [{
    id: 0,
    title: "All", 
    data: [],
  },
  {
    id: 1,
    title: "dafas",
    data: [
      {
        id: 1, title: "xcbn", text: "jmnhtyk", pin: true,
      },
      {
        id: 2, title: "rhrt", text: "sdgdssh", pin: true,
      },
      {
        id: 3, title: "sdhtrhsdfhg", text: "bcvbfd", pin: true,
      },
      {
        id: 4, title: "vsdv", text: "dafas", pin: false,
      }
    ]
  },
  {
    id: 2,
    title: "asfsff",
    data: [
      {
        id: 5, title: "jyr", text: "safag", pin: true,
      },
      {
        id: 6, title: "sa", text: "dafcxbdgas", pin: true,
      },
    ]
  },
  ];
  activeItem = {
    title: "",
    text: "",
  }

  constructor() {
    makeAutoObservable(this);
    let data = [];
    this.categories.forEach(item => {
      data = data.concat(item.data);
    });
    this.categories[0].data = data.sort((a, b) => (a.pin === b.pin) ? 0 : a.pin ? -1 : 1);
  }

  addCategory(category) {
    this.categories.push({
      title: category,
      data: [],
    });
  }

  addItem(title, text) {
    if(this.activeCategory === 0) {
      this.categories[0].data.push({
        id: this.id,
        title: title,
        text: text
      });
    } else {
      this.categories[this.activeCategory].data.push({
        id: this.id,
        title: title,
        text: text
      });
      let data = [];
      this.categories.forEach(item => {
        data = data.concat(item.data);
      });
      this.categories[0].data = data;
    }
    
    this.id++; // Поменять потом на 1
  }

  deleteItem() {
    for (const category of this.categories) {
      category.data = category.data.filter(item => item.id !== this.idItem);
    }
    this.closeMenu();
  }

  openMenu(id) {
    this.isOpenMenu = true;
    this.idItem = id;
  }

  openAddItem() {
    this.isOpenAddItem = true;
  }

  closeAddItem() {
    this.isOpenAddItem = false;
  }

  closeMenu() {
    this.isOpenMenu = false;
  }

  openEditor(id) {
    this.isOpenEditor = true;
    const item = this.categories.flatMap(category => category.data).find(item => item.id === id);
    if (item) {
      this.activeItem.title = item.title;
      this.activeItem.text = item.text;
    }
    this.idItem = id;
    this.closeMenu();
  }

  closeEditor() {
    this.isOpenEditor = false;
    this.idItem = null;
    this.activeItem.title = "";
    this.activeItem.text = "";
  }

  confirmEditor(newTitle, newText) {
    this.categories.forEach(category => {
      const itemToUpdate = category.data.find(item => item.id === this.idItem);
      if (itemToUpdate) {
        itemToUpdate.title = newTitle;
        itemToUpdate.text = newText;
      }
    });
    console.log(this.idItem)
    this.isOpenEditor = false;
    this.activeItem.title = "";
    this.activeItem.text = "";
  }

  togglePin() {
    for (const category of this.categories) {
      for (const item of category.data) {
        if (item.id === this.idItem) {
          return item.pin = !item.pin;
        }
      }
    }
  }
  
  getActiveCategory(activeCategory) {
    this.activeCategory = activeCategory;
    this.sortCategory();
  }

  sortCategory() {
    this.categories.find(obj => obj.id === this.activeCategory).data.sort((a, b) => (a.pin === b.pin) ? 0 : a.pin ? -1 : 1)
  }
}

export default new TodoStore();