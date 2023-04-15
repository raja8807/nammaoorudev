import Home from "../home/home"
import Header from "./header/header"
import styles from './layout.module.scss'
// import Home from "../home/home"

const Layout = ({children})=>{
    return <div className={styles.layout}>
       <Header/>
       <div className={styles.max_width}>
        <Home/>
       </div>
    </div>
}

export default Layout