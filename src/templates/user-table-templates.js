import {column, div, input, row, textArea} from "../utils/utils";

/**
 * Creates html tr for the user
 * @param {User} user
 * @returns {string}
 */
export function makeUserRow(user)
{
    let columns = [];
    for (const key in user)
    {
        const d = div(user[key], "second-line-overflow")
        columns.push(column(d, key))
    }

    return row(columns.join(""));
}


const textInput = (name) => input("text", name)
const inputWrappers = {textInput, textArea}

/* Wrapper for proper abstraction for the makeInputRow method */
export class Input
{
    /** Should match inputWrappers keys
     * @typedef {"textInput" | "textArea"} InputTypes
     */
    
    /**
     * @param {InputTypes} type
     * @param {string} name
     */
    constructor(type, name)
    {
        this.type = type;
        this.name = name;
    }
}

/**
 * @param {Input[]} inputs input fields in each column
 * @param {string} className
 * @returns string
 */
export function makeInputRow(inputs, className = "")
{
    const columns = inputs.map(input =>
    {
        const toHtml = inputWrappers[input.type]

        if(toHtml)
        {
            const inputHtml = toHtml(input.name);
            return column(inputHtml)
        }
    })

    return row(columns.join(""), className)
}

