import './App.css';

function App() {
  return (
    <div className="App">
      <div className="form-task">
        <input name='task' type="text" placeholder='Type your task here!' className="input-task"/>
        <div className='row'>
        <input name='too-task' type="radio" id='clean-up'/>
        <label htmlFor='clean-up'>Clean up bathroom</label>
        </div>
        <div className='row'>
        <input name='too-task' type="radio" id='bs-milk'/>
        <label htmlFor='clean-up'>Buy some milk</label>
        </div><div className='row'>
        <input name='too-task' type="radio" id='jogging'/>
        <label htmlFor='clean-up'>Jogging</label>
        </div><div className='row'>
        <input name='too-task' type="radio" id='learn-react'/>
        <label htmlFor='clean-up'>Learn React</label>
        </div>
      </div>
      <div className="footer">
        <div className="left">5 tasks left!</div>
        <div className="right">MindX todolist</div>
      </div>
    </div>
  );
}

export default App;
