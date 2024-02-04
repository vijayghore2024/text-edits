import React, { useRef } from 'react'

const TextEdits = () => {

    const text = useRef();
    const fs = useRef();
    const color = useRef();

    const convertToUpperCase = () => {
        let ori_text = text.current.value;
        text.current.value = ori_text.toUpperCase();
    }

    const convertToLowerCase = () => {
        let ori_text = text.current.value;
        text.current.value = ori_text.toLowerCase();
    }

    const convertToCapitalCase = () => {
        const str = text.current.value;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        text.current.value = str2;
    }

    const setFontSize = () => {
        let fontSizeInp = fs.current.value;
        let textArea = text.current;
        textArea.style.fontSize = fontSizeInp+'px';
    }

    const setColor = () => {
        let userColor = color.current.value;
        text.current.style.color = userColor;
    }

    const copyToClipboard = () => {
        let textAreaText = text.current.value;
        navigator.clipboard.writeText(textAreaText);
    }

    return (
        <div>
            <h1 className="text-center my-5">Text Edits</h1>

            <div className="container">
                <textarea className='form-control border border-dark mb-4' name="text" id="text" cols="100" rows="10" ref={text} placeholder='Type your text here...'></textarea>


                <div className='text-center'>
                    <button className="btn btn-dark btn-lg mx-2" onClick={convertToUpperCase}>UPPER CASE</button>

                    <button className="btn btn-dark btn-lg mx-2" onClick={convertToLowerCase}>lower case</button>

                    <button className="btn btn-dark btn-lg mx-2" onClick={convertToCapitalCase}>Capital Case</button>

                   <select className='btn btn-dark btn-lg' ref={fs} onChange={setFontSize}>
                        <option value="">Font Size</option>
                        <option value="16">16</option>
                        <option value="20">20</option>
                        <option value="24">24</option>
                        <option value="28">28</option>
                        <option value="32">32</option>

                   </select>
                   
                    <label htmlFor='ucolor' className="btn btn-dark btn-lg ms-2 rounded-0">Font Color</label>
                    <input className='btn btn-dark btn-lg' type="color" name="ucolor" id="ucolor" ref={color}  onChange={setColor}/>

                    <button className="mx-2 btn btn-dark btn-lg" onClick={copyToClipboard}>Copy to Clipboard</button>
                </div>

            </div>
        </div>
    )
}

export default TextEdits
