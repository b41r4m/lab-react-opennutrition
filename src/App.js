import { useState } from "react";
import "./App.css";
import foods from "./foods.json";

import { Row, Divider, Button, Empty, Typography } from "antd";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(false);

  function handleCreate(f) {
    setFoodList((list) => [f, ...list]);
  }
  let foodItems = foodList.map((food) => (
    <FoodBox food={food} key={food.name} itemDelete={deleteItem} />
  ));

  function searchItem(f) {
    let searchFilter = foodList
      .filter((food) => food.name.toLowerCase().includes(f.toLowerCase()))
      .map((item) => item);
    setFoodList(searchFilter);
  }

  function deleteItem(f) {
    let delFilter = foodList.filter((food) => food.name !== f);
    setFoodList(delFilter);
  }
  return (
    <div className="App">
      {showForm ? <AddFoodForm setFList={handleCreate} /> : ""}
      <Button onClick={() => setShowForm(!showForm)}>
        {showForm ? ` Hide Form ` : ` Add New Food `}
      </Button>

      <Search fSearch={searchItem} />

      <Divider>Food List</Divider>
      {foodItems.length ? (
        <Row style={{ width: "100%", justifyContent: "center" }}>
          {foodItems}
        </Row>
      ) : (
        <Empty
          description={
            <Typography.Text>
              Oops! There is no more content to show
            </Typography.Text>
          }
        />
      )}
    </div>
  );
}

export default App;
