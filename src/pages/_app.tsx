import '../styles/global.scss';

import { Header } from '../components/Header';
import { Player } from '../components/Player/Player';

import style from '../styles/app.module.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className={style.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  )
}

export default MyApp
