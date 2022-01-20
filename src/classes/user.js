import {column, div, row} from "../utils/utils";
import RowData            from "./rowData";

export default class User extends RowData
{
    constructor(firstName, lastName, about, eyeColor)
    {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.about = about;
        this.eyeColor = eyeColor;
    }

    get htmlRow()
    {
        let columns = [];
        for (const key in this)
        {
            const d = div(this[key], "second-line-overflow")
            columns.push(column(d, key))
        }

        return row(columns.join(""));
    }
}