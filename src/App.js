import Header from './Components/Header/Header';
import Health from './Components/Health/Health';
import classes from './app.module.css'
import Sign_up from './Components/Sign_Up/Sign_Up';
import Trainings from './Components/Trainings/Trainings';
import Trainer from './Components/Trainer/Trainer'
function App() {
  return (
    <div className={classes.AvatarName}>
      <Header />
      <Health />
      <Sign_up />
      <Trainings />
      <Trainer />
    </div>

  );
}

export default App;
