import Dropdown from './Dropdown';
import './styles.css';
import { data } from './data';

export default function App() {
  return (
    <div className="App">
      <Dropdown placeHolder="Select your colors" data={data} />
    </div>
  );
}
