
function List({
  category= "Category",
  items= []
}){

  // const category = props.category;
  // const itemList = props.items;

  // fruits.sort((a,b) => a.name.localeCompare(b.name));
  // fruits.sort((a,b) => b.name.localeCompare(a.name));
  // fruits.sort((a,b) => a.calories - b.calories);

  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

  // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

  const listItems = items.map(
    item => <li key={item.id}>{item.name}: &nbsp;<b>{item.calories}</b></li>
  );

  return(
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

// List.fefaultProps = {
//   category: "Category",
//   items: []
// }

export default List