import { makeAutoObservable } from "mobx";

class TodoStore {
  activeCategory = 1;
  id = 5;
  idItem = null;
  isOpenMenu = false;
  categories = [{
    id: 1,
    title: "All", 
    data: [],
  },
  {
    id: 2,
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
    id: 3,
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
  items = [];

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

  addItem(activeCategory, title, text) {
    this.categories[activeCategory].data.push({
      id: this.id,
      title: title,
      text: text
    });
    this.id++; // Поменять потом на 1
    let data = [];
    this.categories.forEach(item => {
      data = data.concat(item.data);
    });
    this.categories[0].data = data;
    this.sortCategory();
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

  closeMenu() {
    this.isOpenMenu = false;
    this.idItem = null;
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