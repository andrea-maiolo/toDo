function Category(title){
    this.title = title;
}

const inbox = new Category("Inbox");
const done = new Category('Done');

const listOfCategories = [];

listOfCategories.push(inbox);
listOfCategories.push(done);

export {Category}
export { listOfCategories}