
interface Todolist {
    item: string ,
    status: number
}

class TODOS {
    public items: string [];
    public status: number;

    constructor(items: string [], status: number ) {
        this.items = items;
        this.status = status;
    }
    add(list : Todolist) {
        this.items.push(list.item);
        this.status = list.status;
    }

    display() {
        console.log(`items ${this.items} `);
        console.log(`price ${this.status}`)
    }

}

var todo = new TODOS(["sample_task"],0);

function addItem(item: string, status: number) {
    todo.add({item:item,status:status});
}

function displayItem() {
    todo.display();

}