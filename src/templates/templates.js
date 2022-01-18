/**
 * Returns HTMLElement matching tagName
 * @param {string} tagName
 * @param {HTMLElement[]} contents
 * @param {string} className
 * @returns {HTMLElement}
 */
export function createElement(tagName, contents, className = "")
{
    const result = document.createElement(tagName)
    contents.forEach(content => result.insertAdjacentElement("beforeend",content))
    result.className = "";

    return result;
}

/**
 * tr wrapper
 * @param content
 * @returns {string}
 */
export function row(content)
{
    return `<tr>${content}</tr>`
}

/**
 * td wrapper
 * @param content
 * @param className
 * @returns {string}
 */
export function column(content, className = "")
{
    return `<td class=${className}>${content}</td>`
}

/**
 * div wrapper
 * @param content
 * @param className
 * @returns {string}
 */
export function div(content, className = "")
{
    return `<div class=${className}>${content}</div>`
}

/**
 * th wrapper
 * @param content
 * @param className
 * @returns {string}
 */
export function tableHead(content, className = "")
{
    return `<th class=${className}>${content}</th>`
}

export function input(type, name, initialValue = "")
{
    return `<input type=${type} name=${name} value=${initialValue} />`
}

export function textArea(name, initialValue = "", rows = 10, cols = 30)
{
    return `<textarea name=${name} id="" cols=${cols} rows=${rows}>${initialValue}</textarea>`
}

export function span(content, className = "")
{
    return `<span class=${className}>${content}</span>`
}

export function spanElement(content, className = "")
{
    const result = document.createElement("span");
    result.textContent = content;
    result.className = className;

    return result;
}

/**
 * return an HTML table
 * @param {Array} theads contains th contents
 * @param {Array} rows contains tr contents
 * @param {function} rowTempalate a wrapper for the tr's in the table
 * @param {string} className class name of the table
 * @returns {string}
 */
export function makeTable(theads, rows, rowTempalate = row, className = "")
{
    const tableHead = theads.join("");
    const tableBody = rows.reduce((result, content) => result + rowTempalate(content), "");

    return `
    <table class=${className}>
        <thead>
        ${tableHead}
        </thead>
        <tbody>
        ${tableBody}
        </tbody>
    </table>
    `
}