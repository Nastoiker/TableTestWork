import styles from './navigation.module.scss'
import {useAppDispatch} from "../../lib/hooks/useAppDispatch";
import {useAppSelector} from "../../../app/Providers/StoreProvider/config/store";
import {beforePage, nextPage, postsByPage} from "./navigation.actions";
export const Navigation = () => {
    const dispatch = useAppDispatch();
    const {countPages, page} = useAppSelector((state) => state.post);
    return (
        <nav className={styles.navbar}>
            <button
                className={styles.direction}
                disabled={page === 1}
                onClick={() => {
                    beforePage(dispatch, page);
                }}
            >
                Назад
            </button>

            <article>
                { Array.from({ length: countPages}, (_,i) => i + 1).map(el => (
                    <button
                        key={el}
                        className={page === el ? `${styles.active} ${styles.number}` : styles.number}
                        onClick={() => {
                            postsByPage(dispatch, el);
                        }}
                    >
                        {el}
                    </button>
                ))}
            </article>

            <button
                className={styles.direction}
                disabled={page === countPages}
                onClick={() => {
                    nextPage(dispatch, page);
                }}
            >
                Далее
            </button>
        </nav>
    );
}