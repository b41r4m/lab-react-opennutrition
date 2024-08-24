import { Divider, Input } from "antd";

function Search({ fSearch }) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        type="text"
        onChange={(e) => {
          fSearch(e.target.value);
        }}
      />
    </>
  );
}

export default Search;
