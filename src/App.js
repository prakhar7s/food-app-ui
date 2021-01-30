import "./App.css";
import Header from "./components/header/header.component";
import Main from "./components/main/main.component";
import Footer from "./components/footer/footer.component";
import { Route } from "react-router-dom";
import PlannedRecipeDetails from "./components/planned-recipe/planned-recipe.component";

const Home = () => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

function App() {
  return (
    <div className="app">
      <Route exact path="/" component={Home} />
      <Route path="/planned-recipe" component={PlannedRecipeDetails} />
    </div>
  );
}

export default App;
