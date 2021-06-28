import Header from "./Header";
import Footer from './Footer';
import './style.css';
import Tape from "./Tape";

const Layout = ({children, coins})=>{
    
    return(
<>
    <div className="App">
      <div className='container'>
        <Header/>
        <Tape coins={coins}/>
        {children}
        <Footer/>
      </div>
    </div>
</>
    )
}

export default Layout;