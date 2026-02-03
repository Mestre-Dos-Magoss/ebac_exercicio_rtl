import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://cdn.awsli.com.br/2500x2500/2571/2571273/produto/210238109/batmovel-liga-da-justica-figura-batman-em-metal-jada-toys-124-754b20f9.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
