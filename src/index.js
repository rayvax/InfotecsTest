import "./styles/main.css"
import "./styles/user-table.css"
import "./styles/table-sort.css"
import "./styles/table-edit.css"
import fetchMockData                                        from "./mock_data";
import { makeUserRow}                                       from "./templates/user-table-templates";
import {makeSortable}                                       from "./utils/table-utils";
import {tableHead, makeTable, input, textArea, column, row} from "./templates/templates";
import {startRowEdit}                                       from "./table_edit";

const tableHeadNames = ["First Name", "Last Name", "About", "Eye Color", ""]

fetchMockData().then(users =>
{
    const container = document.querySelector(".user-table-container");
    const tableHeads = Array.from(tableHeadNames, name => tableHead(name))
    container.insertAdjacentHTML("beforeend", makeTable(tableHeads, users, makeUserRow, "user-table"));

    const table = document.querySelector(".user-table");

    //sorting functionality
    makeSortable(table);

    const edits = table.querySelectorAll(".edit");
    edits.forEach(edit =>
    {
        edit.onclick = () => startRowEdit(edit.parentElement)
    })
})
