import { Divider, Input, Button } from "antd";
import { useState } from "react";

function AddFoodForm({ setFList }) {
  const [fName, setFName] = useState("");
  const [fImage, setFImage] = useState("");
  const [fCal, setFCal] = useState(0);
  const [fServ, setFServ] = useState(0);

  let fItem = {
    name: fName,
    calories: fCal,
    image: fImage,
    servings: fServ,
  };

  function handleSubmit(e) {
    e.preventDefault();
    setFList(fItem);
    setFName("");
    setFImage("");
    setFCal(0);
    setFServ(0);
  }
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        name="name"
        value={fName}
        type="text"
        onChange={(e) => {
          setFName(e.target.value);
        }}
      />

      <label>Image</label>
      <Input
        name="image"
        value={fImage}
        type="text"
        onChange={(e) => {
          setFImage(e.target.value);
        }}
        placeholder="example - https://i.imgur.com/abKGOcv.jpg"
      />

      <label>Calories</label>
      <Input
        name="calories"
        value={fCal}
        type="number"
        onChange={(e) => {
          setFCal(e.target.value);
        }}
      />

      <label>Servings</label>
      <Input
        name="servings"
        value={fServ}
        type="number"
        onChange={(e) => {
          setFServ(e.target.value);
        }}
      />

      <Button htmlType="submit">Create</Button>
    </form>
  );
}

export default AddFoodForm;
