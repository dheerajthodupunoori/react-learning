// import logo from './logo.svg';
import './App.css';
// import ExpenseItem from './components/ExpenseItem';
import Books from './components/Books/Books';

const  App = () => {

  const books = [
    {
      id:1,
      author:"Robert Kiyosaki",
      title:"Rich dad Poor dad"
    },
    {
      id:2,
      author:"Chethan bhagath",
      title:"Revolution 20 Twenty"
    },
    {
      id:3,
      author:"Napoleon Hill",
      title:"Think and Grow Rich"
    },
    {
      id:4,
      author:"Ankur Warikoo",
      title:"Do Epic Shit"
    }
  ]


  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        {/* <ExpenseItem></ExpenseItem> */}
        <Books books={books}/>
      </div>
    </div>
  );
}

export default App;
