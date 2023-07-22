import {useState} from "react";
import styles from "./SortToggle.module.scss";
import {PostSchema} from "../../../app/Entities/Post/PostSchema";

export const SortToggle = ({field, name, sortBy, sort}: {field: keyof PostSchema, name: string, sort: 'ASC' | 'DESC', sortBy: (field: keyof PostSchema, sortType: string) => void}) => {
    const [sortType, setSortType] = useState<'ASC' | 'DESC'>(sort);
    return <th onClick={() => {
        sortBy(field, sortType)
        setSortType((t) => t==='ASC'? 'DESC' : 'ASC' )
    }}>
            <span>{name}</span>
        <svg
            className={(sortType === 'ASC') ? styles.inverted : undefined}
            xmlns='http://www.w3.org/2000/svg' width='12' height='7' viewBox='0 0 12 7' fill='none'
        >
            <line x1='0.353553' y1='0.646447' x2='6.18011' y2='6.47301' stroke='#FCFCFC' />
            <line x1='5.64645' y1='6.30331' x2='11.3033' y2='0.646453' stroke='white' />
        </svg>
    </th>
}