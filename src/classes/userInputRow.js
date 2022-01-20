import {makeInputRow}                                  from "../templates/user-table-templates";
import {createElement, spanElement, toElementFromHtml} from "../utils/utils";

export default class UserInputRow
{
    /**
     * @param {Input[]} inputs input fields in each column
     */
    constructor(inputs)
    {
        const html = makeInputRow(inputs)
        this.element = toElementFromHtml(html)

        const lastColumn = this.createInputActionsColumn()
        this.element.insertAdjacentElement("beforeend", lastColumn)

        this.setEditMode(false)
        document.body.insertAdjacentElement("beforeend", this.element)
    }

    /**
     * @param {HTMLElement} value
     */
    set editRow(value)
    {
        if (this._editRow)
            this._editRow.style.display = null

        this._editRow = value;
    }

    get editRow()
    {
        return this._editRow;
    }

    changeInputValues(name, value)
    {
        const input = this.element.querySelector(`[name=${name}]`)

        if (input)
            input.value = value;
    }

    setEditMode(value)
    {
        this.element.style.display = value ? null : "none";

        if (this._editRow)
        {
            this._editRow.style.display = value ? "none" : null;
        }
    }

    getValues()
    {
        const result = {}
        const inputs = this.element.querySelectorAll(`[name]`)
        inputs.forEach(input =>
        {
            result[input.name] = input.value;
        })

        return result;
    }

    createInputActionsColumn()
    {
        const save = spanElement("Save")
        const cancel = spanElement("Cancel")

        save.onclick = () => this.saveEdit();
        cancel.onclick = () => this.stopEdit();

        return createElement("td", [save, cancel], "actions");
    }

    startEdit(targetRow)
    {
        this.editRow = targetRow
        this.setEditMode(true);

        this.editRow.querySelectorAll("td:not(:last-child)")
            .forEach(td =>
            {
                this.changeInputValues(td.className, td.textContent);
            })

        this.editRow.insertAdjacentElement("afterend", this.element)
    }

    saveEdit()
    {
        const fields = this.getValues()
        for (const key in fields)
        {
            const htmlField = this.editRow.querySelector(`.${key} div`)
            htmlField.textContent = fields[key]
        }

        this.stopEdit()
    }

    stopEdit()
    {
        this.setEditMode(false);
        this.editRow = null;
    }

    /**
     * Shows or hides a column
     * @param {number} colIndex
     * @param {boolean} show
     */
    showColumn(colIndex, show = true)
    {
        const column = this.element.querySelector(`td:nth-child(${colIndex + 1})`)
        column.style.display = show ? null : "none";
    }
}