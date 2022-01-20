import "./styles/main.css"
import "./styles/user-table.css"
import "./styles/table-sort.css"
import "./styles/table-edit.css"
import "./styles/columns-hider.css"
import fetchMockData                      from "./mock_data";
import {Input, makeUserRow} from "./templates/user-table-templates";
import UserInputRow                       from "./classes/userInputRow";
import User                               from "./classes/user";
import Table                 from "./classes/table";
import TableColumnsHider     from "./classes/tableColumnsHider";

const thNames = ["First Name", "Last Name", "About", "Eye Color"]
const inputs = [
    new Input("textInput", "firstName"),
    new Input("textInput", "lastName"),
    new Input("textArea", "about"),
    new Input("textInput", "eyeColor")]

fetchMockData().then(data =>
{
    return data.map(field => new User(field.name.firstName, field.name.lastName, field.about, field.eyeColor))
})
    .then(users =>
{
    const tableContainer = document.querySelector(".user-table-container");

    const table = new Table(thNames, users, makeUserRow)
    table.addClass("user-table")
    table.render(tableContainer)

    //sorting functionality
    table.makeSortable("th")

    //editing functionality
    const userInputRow = new UserInputRow(inputs);
    table.makeEditable(userInputRow)

})
