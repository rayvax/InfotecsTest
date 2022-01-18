import {makeUserInputRowElement}                  from "./templates/user-table-templates";
import {createElement, spanElement} from "./templates/templates";

const userInputRow = {
    htmlRow: undefined,

    changeInputValues(name, value)
    {
        const input = document.querySelector(`[name=${name}]`)

        if(input)
            input.value = value;
    },
    initHtmlRow()
    {
        this.htmlRow = makeUserInputRowElement()

        const lastColumn = createInputActionsColumn()
        this.htmlRow.insertAdjacentElement("beforeend", lastColumn)

        this.isHtmlHidden(true)
        document.body.insertAdjacentElement("beforeend", this.htmlRow)
    },
    isHtmlHidden(hidden)
    {
        this.htmlRow.style.display = hidden ? "none" : null;
    },
    getValues()
    {
        const result = {}
        const inputs = this.htmlRow.querySelectorAll(`[name]`)
        inputs.forEach(input =>
        {
            result[input.name] = input.value;
        })

        return result;
    }
}
userInputRow.initHtmlRow()

let editRow;
export function startRowEdit(targetRow)
{
    if (editRow)
    {
        editRow.style.display = null
    }
    editRow = targetRow
    targetRow.style.display = "none"

    const columns = targetRow.querySelectorAll("td:not(:last-child)")
    columns.forEach(td =>
    {
        userInputRow.changeInputValues(td.className, td.textContent);
    })

    userInputRow.isHtmlHidden(false);
    targetRow.insertAdjacentElement("afterend", userInputRow.htmlRow)
}

function createInputActionsColumn()
{
    const save = spanElement("Save")
    const cancel = spanElement("Cancel")

    save.onclick = saveEdit;
    cancel.onclick = stopEdit;

    return createElement("td", [save, cancel]);
}

function saveEdit()
{
    const fields = userInputRow.getValues()
    for (const key in fields)
    {
        const htmlField = editRow.querySelector(`.${key} div`)
        htmlField.textContent = fields[key]
    }

    stopEdit()
}

function stopEdit()
{
    editRow.style.display = null;
    editRow = null;

    userInputRow.isHtmlHidden(true);
}