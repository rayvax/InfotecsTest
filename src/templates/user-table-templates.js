import {column, div, input, row, span, textArea} from "./templates";

export function makeUserRow(user)
{
    const rowData = {
        firstName: user.name.firstName,
        lastName: user.name.lastName,
        about: user.about,
        eyeColor: user.eyeColor
    }

    let columns = [];
    for (const key in rowData)
    {
        const d = div(rowData[key], "second-line-overflow")
        columns.push(column(d, key))
    }
    columns.push(column("Edit", "edit"))

    return row(columns.join(""));
}

export function makeUserInputRowElement()
{
    const inputs = [input("text", "firstName"),
                    input("text", "lastName"),
                    textArea("about"),
                    input("text", "eyeColor")]
    const columns = Array.from(inputs, input => column(input));

    const result = document.createElement("tr");
    result.insertAdjacentHTML("beforeend", columns.join(""))

    return result;
}
