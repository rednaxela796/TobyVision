// components/textCycle.js
import React, { Component }  from 'react';
import { useState, useEffect} from 'react';

function TextCycle ( { array } ) {
    const [msg, setMsg] = useState(0);
    function changeMsg() {
        const d = document.getElementById("homeChanger");

        fadeOut(d)
        setMsg((msg > array.length - 2) ? 0 : msg + 1);

        setTimeout(function(){
            d.className = "";
        }, 1000);

    }

    function fadeOut( {d=HTMLElement}) {
        d.className = "fadeOut";

    //     await new Promise((resolve) =>
    //         setTimeout(() => {
    //             var d = document.getElementById("homeChanger");
    //             d.className = "fadeOut";
    //             resolve();
    //         }, 5000)
    //     );
    //
    }
    function fadeIn() {
        const d = document.getElementById("homeChanger");
        d.className = "fadeIn";



        // await new Promise((resolve) =>
        //     setTimeout(() => {
        //         var d = document.getElementById("homeChanger");
        //         d.className = "fadeIn";
        //         resolve();
        //     }, 5000)
        // );


    }

    useEffect(() => {
        setTimeout(changeMsg, 3000);



    }, [msg]);

    return (
        <div>
            {array[msg]}
        </div>
    );
};

export default TextCycle;