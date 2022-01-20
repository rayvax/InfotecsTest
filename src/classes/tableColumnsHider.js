import {checkbox, div, toElementFromHtml} from "../utils/utils";

export default class TableColumnsHider
{
    table;
    element;

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
                this.table.showColumn(colIndex, event.target.checked)
            }
        })
    }

    render(container)
    {
        container.insertAdjacentElement("beforeend", this.element)
    }
}

function createTableColumnsHiderElement(tableHeads)
{
    let checkboxes = []
    tableHeads.forEach((head, index) =>
    {
        const hiderHtml = checkbox(`${index}`, true) + head.textContent
        checkboxes.push(div(hiderHtml, "column-hider"))
    })

    const html = div(checkboxes.join(""))
    return  toElementFromHtml(html);
}