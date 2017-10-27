var TODOS = (function () {
    function TODOS(items, status) {
        this.items = items;
        this.status = status;
    }
    TODOS.prototype.add = function (list) {
        this.items.push(list.item);
        this.status = list.status;
    };
    TODOS.prototype.display = function () {
        console.log("items " + this.items + " ");
        console.log("price " + this.status);
    };
    return TODOS;
}());
var todo = new TODOS(["sample_task"], 0);
function addItem(item, status) {
    todo.add({ item: item, status: status });
}
function displayItem() {
    todo.display();
}
