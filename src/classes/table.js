import {column, makeTable, row, span, tableHead, toElementFromHtml} from "../utils/utils";

const sortableThClassName = "sortable";
const ascendingClassName = "sort-asc";
const descendingClassName = "sort-desc";

export default class Table
{
    element;
    userInputRow;

    constructor(thNames, rowData, rowTemplate = row)
    {
        const html = makeTable(thNames, rowData, rowTemplate);
        this.element = toElementFromHtml(html)
    }

    /**
     * Return table th's
     * @returns {NodeListOf<HTMLElement>}
     */
    get heads()
    {
        return this.element.querySelectorAll("th")
    }

    /**
     * Puts table into html as a container child
     * @param {HTMLElement} container
     */
    render(container)
    {
        container.insertAdjacentElement("beforeend", this.element);
    }

    /**
     * @param {string} name
     */
    addClass(name)
    {
        this.element.classList.add(name)
    }

    /**
     * Makes some columns sortable
     * @param {string} thSelector selector for the columns which would become sortable
     */
    makeSortable(thSelector)
    {
        this.element.classList.add("table-sortable");
        const tableHeads = Array.prototype.slice.call(this.element.querySelectorAll(thSelector));
        tableHeads.forEach(th =>
        {
            th.classList.add(sortableThClassName)

            th.onclick = () =>
            {
                const columnIndex = tableHeads.indexOf(th)
                const currentIsAscending = th.classList.contains("sort-asc");
                this.sortByColumn(columnIndex, !currentIsAscending);
            }
        })
    }

    /**
     * Sorts table column
     * @param {number} colIndex The index of the column to sort
     * @param {boolean} ascending Whether to sort a table in ascending order
     */
    sortByColumn(colIndex, ascending = true)
    {
        const directionModifier = ascending ? 1 : -1;
        const tbody = this.element.tBodies[0];
        const rows = Array.from(tbody.querySelectorAll("tr"));

        //sort rows
        const sortedRows = rows.sort((a, b) =>
        {
            const aColText = a.querySelector(`td:nth-child(${ colIndex + 1 })`).textContent.trim();
            const bColText = b.querySelector(`td:nth-child(${ colIndex + 1 })`).textContent.trim();

            return aColText > bColText ? (1 * directionModifier) : (-1 * directionModifier);
        })

        //remove previous rows
        while(tbody.firstChild)
        {
            tbody.removeChild(tbody.firstChild);
        }

        //add sorted rows
        tbody.append(...sortedRows);

        //remove previous order classes
        this.element.querySelectorAll("th")
            .forEach(th => th.classList.remove(ascendingClassName, descendingClassName));

        //mark as ordered
        const sortClass = ascending ? ascendingClassName : descendingClassName;
        this.element.querySelector(`th:nth-child(${ colIndex + 1})`).classList.add(sortClass);
    }

    /**
     * Adds column to the end of the table to edit each row.
     * @param {UserInputRow} userInputRow
     */
    makeEditable(userInputRow)
    {
        this.userInputRow = userInputRow;

        const actionsHeading = tableHead("Actions", "actions")
        const editColumn = column(span("Edit", "edit"), "actions")

        const headRow = this.element.querySelector("thead tr")
        const bodyRows = this.element.querySelectorAll("tbody tr")

        //add edit column
        headRow.insertAdjacentHTML("beforeend", actionsHeading)
        bodyRows.forEach(row =>
        {
            row.insertAdjacentHTML("beforeend", editColumn)
        })

        //add onclick events
        this.element.querySelectorAll(".edit")
            .forEach(edit =>
            {
                const editCell = edit.parentElement
                edit.onclick = () => userInputRow.startEdit(editCell.parentElement)
            })
    }

    /**
     * Shows or hides a column
     * @param {number} colIndex
     * @param {boolean} show
     */
    showColumn(colIndex, show = true)
    {
        const columnSelector = `thead th:nth-child(${colIndex + 1}), tbody td:nth-child(${colIndex + 1})`
        const columnRows = this.element.querySelectorAll(columnSelector);

        const displayValue = show ? null : "none";
        columnRows.forEach(row => {
            row.style.display = displayValue
        })

        if(this.userInputRow)
            this.userInputRow.showColumn(colIndex, show)
    }
}