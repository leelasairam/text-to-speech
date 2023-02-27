async function GetAudio(){
    let text = document.querySelector("#text").value.replace(/\n\s*\n/g, " ");
    if(text){
        document.querySelector("#speakbtn").innerHTML="Please wait...";
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': ApiKey(),
                'X-RapidAPI-Host': 'text-to-speech-neural-google.p.rapidapi.com'
            },
            body: `{"audioFormat":"ogg","paragraphChunks":["${text}"],"voiceParams":{"name":"Wavenet-B","engine":"google","languageCode":"en-IN"}}`
        };
        
        const response = await fetch('https://text-to-speech-neural-google.p.rapidapi.com/generateAudioFiles', options);
        const data = await response.json();
        document.querySelector("#content").innerHTML = `
        <audio controls="controls">
            <source src="data:audio/ogg;base64,${data.audioStream}" \>
        </audio>`;
        document.querySelector("#speakbtn").innerHTML="Speak";
    }
    else{
        alert("Please enter text")
    }

}

(function(_0x126dfc,_0x36da85){var _0x1a28a6=_0x3589,_0x17b435=_0x126dfc();while(!![]){try{var _0x2c9bbf=-parseInt(_0x1a28a6(0x96))/0x1+-parseInt(_0x1a28a6(0x90))/0x2+parseInt(_0x1a28a6(0x8e))/0x3*(-parseInt(_0x1a28a6(0x93))/0x4)+-parseInt(_0x1a28a6(0x95))/0x5*(parseInt(_0x1a28a6(0x92))/0x6)+-parseInt(_0x1a28a6(0x99))/0x7*(parseInt(_0x1a28a6(0x97))/0x8)+-parseInt(_0x1a28a6(0x8f))/0x9+parseInt(_0x1a28a6(0x91))/0xa*(parseInt(_0x1a28a6(0x98))/0xb);if(_0x2c9bbf===_0x36da85)break;else _0x17b435['push'](_0x17b435['shift']());}catch(_0x5b7332){_0x17b435['push'](_0x17b435['shift']());}}}(_0x2ca4,0xd7948));function ApiKey(){var _0x2b8bd6=_0x3589;return _0x2b8bd6(0x94);}function _0x3589(_0x4fe4be,_0x2b44f3){var _0x2ca488=_0x2ca4();return _0x3589=function(_0x358955,_0x230ab9){_0x358955=_0x358955-0x8e;var _0x249b7f=_0x2ca488[_0x358955];return _0x249b7f;},_0x3589(_0x4fe4be,_0x2b44f3);}function _0x2ca4(){var _0x3ac75f=['6vTxWpR','44ikSuvB','d3291d72ffmsh6e8beb8e97e7a05p1dc04ejsnc45eba356f5d','5716310hrWqdL','1725693IOyvaC','856abuEhp','11ZGxODR','18074BGodzr','438492eaBzCU','171783TfAONd','3270780vTGDqh','72905260WCQeDb'];_0x2ca4=function(){return _0x3ac75f;};return _0x2ca4();}
