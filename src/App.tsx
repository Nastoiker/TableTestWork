import './App.css'
import {Navigation} from "./shared/ui/Navigation/navigation";
import {SearchInput} from "./shared/ui/Search/Search";
import {useAppDispatch} from "./app/Providers/StoreProvider/config/store";
import {setSearchBy} from "./pages/TablePage/model/slices/postSlice";
import TablePage from "./pages/TablePage/TablePage";

function App() {
    const dispatch = useAppDispatch();
  return (
    <>
        <SearchInput  onChange={(search) => dispatch(setSearchBy(search))} />
        <TablePage columns={[{name: 'ID', field: 'id'}, {name: 'Заголовок', field: 'title'}, {name: 'Описание', field: 'body'}]} />
        <Navigation />
    </>
  )
}

export default App
