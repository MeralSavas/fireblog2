import Card from "../../components/card/Card";
import { Cards, HomeCon } from "./NewBlog-styled";

function NewBlog() {
  return (
    <HomeCon>
      <h3>DashBoard</h3>
      <Cards>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Cards>
    </HomeCon>
  );
}
export default NewBlog;
