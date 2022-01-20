import {checkbox, div, label, toElementFromHtml} from "../utils/utils";

export default class TableColumnsHider
{
    table;
    element;

    /**
     * @param {Table} table
     */
    constructor(table)
    {
        this.table = table;

        this.element = createTableColumnsHiderElement(this.table.heads)
        this.element.querySelectorAll("input")
                    .forEach(input =>
        {
            input.onchange = (event) =>
            {
                const colIndex = parseInt(event.target.name)
                const show = event.target.checked
                this.table.showColumn(colIndex, show)
            }
        })
    }

    /**
     * @param {HTMLElement} container
     */
    render(container)
    {
        container.insertAdjacentElement("beforeend", this.element)
    }
}

/**
 * Creates html for the TableColumnsHider class
 * @param tableHeads
 * @returns {HTMLElement}
 */
function createTableColumnsHiderElement(tableHeads)
{
    let checkboxes = []
    tableHeads.forEach((head, index) =>
    {
        const hiderHtml = checkbox(`${index}`, true) + head.textContent
        checkboxes.push(label(hiderHtml, "column-hider"))
    })

    const html = div(checkboxes.join(""))
    return  toElementFromHtml(html);
}