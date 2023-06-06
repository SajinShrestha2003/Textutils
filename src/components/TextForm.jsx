/* eslint-disable react/prop-types */
import { useState } from "react";

export default function TextForm(props) {
    // using react hooks
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success");
    };
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase", "success");
    };
    const handleCLearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("text cleared", "success");
    };

    const handleCopyClick = async () => {
        let text = document.getElementById("myBox").innerHTML;
        try {
            await navigator.clipboard.writeText(text);
            // console.log("Content copied to clipboard");
            props.showAlert("text copied", "success");
        } catch (err) {
            // console.error("Failed to copy: ", err);
        }
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('extra space cleared', 'success')
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="6"
                        style={{
                            backgroundColor: props.mode === "dark" ? "#042743" : "white",
                            color: props.mode === "dark" ? "white" : "black",
                        }}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
                    Convert to uppercase
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>
                    Convert to lowercase
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCLearClick}>
                    Clear text
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>
                    Copy text
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
                    handle extra spaces
                </button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h3>Your text summary</h3>
                <p>
                    {text.split(/\s+/).length} words and {text.length} characters<i>(note that the word count is based on space)</i>
                </p>
                <p>time taken to read single word: {2.08 * text.split(" ").length} seconds</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    );
}
