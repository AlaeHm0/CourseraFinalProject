import Budget from "./component/Budget";
import Table from "./component/Table";
import Change from "./component/Change";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap"
function App(){
  return(
    <div className="container">
        <Budget />
        <Table />
        <Change />
    </div>
  )
}
export default App;