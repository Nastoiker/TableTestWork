import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface SearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    onChange: (value: string) => void;
}