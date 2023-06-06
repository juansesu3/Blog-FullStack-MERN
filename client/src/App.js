import "./App.css";

const App = () => {
  return (
    <main>
      <header>
        <a href="" className="logo">
          My logo
        </a>
        <nav>
          <a href="/login" className="">
            Login
          </a>
          <a href="/register" className="">
            Register
          </a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
          <img src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=990&crop=1" />
        </div>

        <div className="texts">
          <h2>
          full-house battery backup coming later this year
          </h2>
          <p className="info">
            <a className="author">@juanser__</a>
            <time>2023/6/6 10:0</time>
          </p>
          <p className="summary">
            Today at its special launch event, home backup power giant EcoFlow
            launched a flurry of new products, including a “Whole-Home Backup
            Power Solution.”
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=990&crop=1" />
        </div>

        <div className="texts">
          <h2>
            EcoFlow teases full-house battery backup coming later this year
          </h2>
          <p className="info">
            <a className="author">@juanser__</a>
            <time>2023/6/6 10:0</time>
          </p>
          <p className="summary">
            Today at its special launch event, home backup power giant EcoFlow
            launched a flurry of new products, including a “Whole-Home Backup
            Power Solution.”
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=990&crop=1" />
        </div>

        <div className="texts">
          <h2>
            EcoFlow teases full-house battery backup coming later this year
          </h2>
          <p className="info">
            <a className="author">@juanser__</a>
            <time>2023/6/6 10:0</time>
          </p>
          <p className="summary">
            Today at its special launch event, home backup power giant EcoFlow
            launched a flurry of new products, including a “Whole-Home Backup
            Power Solution.”
          </p>
        </div>
      </div>
    </main>
  );
};

export default App;
