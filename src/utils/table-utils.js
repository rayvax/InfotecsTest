const ascendingClassName = "sort-asc";
const descendingClassName = "sort-desc";

/**
 *
 * @param {HTMLTableElement} table
 * @param {number} colIndex The index of the column to sort
 * @param {boolean} ascending Whether to sort a table in ascending order
 */
export function sortTableByColumn(table, colIndex, ascending = true)
{
    const directionModifier = ascending ? 1 : -1;
    const tbody = table.tBodies[0];
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
    table.querySelectorAll("th")
        .forEach(th => th.classList.remove(ascendingClassName, descendingClassName));

    //mark as ordered
    const sortClass = ascending ? ascendingClassName : descendingClassName;
    table.querySelector(`th:nth-child(${ colIndex + 1})`).classList.add(sortClass);
}

/**
 * adds all sorting functionality
 * @param {HTMLTableElement} table
 */
export function makeSortable(table)
{
    table.classList.add("table-sortable");
    const tableHeads = Array.prototype.slice.call(table.querySelectorAll("th"));
    tableHeads.forEach(th =>
    {
        th.onclick = () =>
        {
            const columnIndex = tableHeads.indexOf(th)
            const currentIsAscending = th.classList.contains("sort-asc");
            sortTableByColumn(table, columnIndex, !currentIsAscending);
        }
    })
}

