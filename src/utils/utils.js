/**
 * Converts html string to DOM element
 * @param {string} html
 * @returns {HTMLElement}
 */
export function toElementFromHtml(html)
{
    const container = document.createElement("template")
    container.insertAdjacentHTML("beforeend", html)

    return container.children[0]
}

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
    result.className = className;

    return result;
}

/**
 * html pair tag wrapper
 * @param {string} tagName
 * @param {string} content
 * @param {string} className
 * @returns {string}
 */
function pairTag(tagName, content, className = "")
{
    const htmlClass = className === "" ? "" : `class="${className}"`
    return `<${tagName} ${htmlClass}>${content}</${tagName}>`
}

/**
 * tr wrapper
 * @param {string} content
 * @param {string} className
 * @returns {string}
 */
export function row(content, className = "")
{
    return pairTag("tr", content, className)
}

/**
 * td wrapper
 * @param {string} content
 * @param {string} className
 * @returns {string}
 */
export function column(content, className = "")
{
    return pairTag("td", content, className)
}

/**
 * div wrapper
 * @param {string} content
 * @param {string} className
 * @returns {string}
 */
export function div(content, className = "")
{
    return pairTag("div", content, className)
}

/**
 * th wrapper
 * @param {string} content
 * @param {string} className
 * @returns {string}
 */
export function tableHead(content, className = "")
{
    return pairTag("th", content, className)
}

/**
 * input wrapper
 * @param {string} type
 * @param {string} name
 * @param {string} initialValue
 * @returns {string}
 */
export function input(type, name, initialValue = "")
{
    return `<input type="${type}" name="${name}" value=${initialValue} />`
}

/**
 * textArea wrapper
 * @param {string} name
 * @param {string} initialValue
 * @param {number} rows
 * @param {number} cols
 * @returns {string}
 */
export function textArea(name, initialValue = "", rows = 10, cols = 30)
{
    return `<textarea name="${name}" cols=${cols} rows=${rows}>${initialValue}</textarea>`
}

/**
 * span wrapper
 * @param {string} content
 * @param {string} className
 * @returns {string}
 */
export function span(content, className = "")
{
    return pairTag("span", content, className)
}


/**
 * @param {string} content
 * @param {string} className
 * @returns {HTMLSpanElement}
 */
export function spanElement(content, className = "")
{
    const result = document.createElement("span");
    result.textContent = content;
    result.className = className;

    return result;
}

/**
 * return an HTML table
 * @param {Array} theadNames contains th contents
 * @param {RowData[]} rowDatas contains tr contents
 * @param {string} className class name of the table
 * @returns {string}
 */
export function makeTable(theadNames, rowDatas, className = "")
{
    const reduceToHtml = function (template)
    {
        return (result, content) => result + template(content);
    }
    const theadContent = theadNames.reduce(reduceToHtml(tableHead), "");
    const tableBodyContent = rowDatas.reduce((result, current) => result + current.htmlRow, "");

    return `
    <table class=${className}>
        <thead>
        ${theadContent}
        </thead>
        <tbody>
        ${tableBodyContent}
        </tbody>
    </table>
    `
}

/**
 * checkbox wrapper
 * @param {string} name
 * @param {boolean} checked
 * @returns {string}
 */
export function checkbox(name, checked = false)
{
    const checkedStatus = checked ? "checked" : "";
    return `<input type="checkbox" name="${name}" ${checkedStatus} />`;
}

/**
 * label wrapper
 * @param {string} content
 * @param {string} className
 * @returns {string}
 */
export function label(content, className)
{
    return pairTag("label", content, className)
}