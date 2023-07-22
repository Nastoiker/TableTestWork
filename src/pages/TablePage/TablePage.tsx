import {memo, useCallback, useEffect} from "react";
import {TableProps} from "./model/types/TableProps";
import {useAppDispatch} from "../../shared/lib/hooks/useAppDispatch";
import styles from './Table.module.scss';
import {fetchPostsPage} from "./model/actions";
import {useAppSelector} from "../../app/Providers/StoreProvider/config/store";
import {selectPosts} from "./model/selectors/tableSelector";
import {SortToggle} from "../../shared/ui/SortToggle/SortToggle";
import {sortByColumn} from "./model/slices/postSlice";
const  TablePage = memo(({columns}: TableProps) => {
    const dispatch = useAppDispatch();
    const page = useAppSelector((state) => state.post.page);
    useEffect(() => {
        dispatch(fetchPostsPage({page: page, limit: '10'}));
    }, [page]);
    const posts = useAppSelector(selectPosts);
    return (
        <section  className={styles.table}>
            <table>
                <thead>
                <tr>
                    {columns.map(({name, field}) => (
                        <SortToggle key={field} sort={'DESC'} field={field} name={name} sortBy={(field, sortType) => dispatch(sortByColumn({field, sortType}))} />
                    ))}
                </tr>
                </thead>

                <tbody>
                {posts.map(({id, title, body}) => (
                    <tr key={id}>
                        <td className={styles.firsttd}>{id}</td>
                        <td>{title}</td>
                        <td>{body}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>

    );
        });
export default TablePage;