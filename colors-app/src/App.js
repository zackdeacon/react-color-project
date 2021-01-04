import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./ColorHelpers";

function App() {
  console.log(generatePalette(seedColors[4]))
  return (
    <div>
      <Palette {...seedColors[4]}/>
    </div>
  );
}

export default App;
