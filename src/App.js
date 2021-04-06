
import './App.css';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

function App() {
  return (
    <Button type="primary" icon={<PlusCircleOutlined />}>Add</Button>
  );
}

export default App;
