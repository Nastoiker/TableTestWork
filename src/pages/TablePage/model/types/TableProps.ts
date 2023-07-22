import {DetailedHTMLProps, HTMLAttributes} from "react";
import {PostSchema} from "../../../../app/Entities/Post/PostSchema";

export interface TableProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement>{
    columns: {name: string, field: keyof PostSchema}[];
}