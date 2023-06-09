import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About"; 

function App() {
    const [mode, setMode] = useState("light");
    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = '#042743';
            showAlert('dark mode enabled', 'success')
        } else {
            setMode("light");
            document.body.style.backgroundColor = 'white';
            showAlert('light mode enabled', 'success')
        }
    };
    const [alert, setAlert] = useState(null)
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(()=> {
            setAlert(null)
        }, 2000)
    }
    return (
        <>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <div className="container my-3">
                <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
                {/* <About/> */}
            </div>
        </>
    );
}

export default App;