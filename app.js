let ui = new UI();

eventListener();

function eventListener(){

    document.getElementById("submit").addEventListener("click",function(){
        translateWord();
    });

    document.getElementById("language").onchange = () =>{
        ui.changeoutPut();
    }

}

function translateWord(){
     let translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);

    translate.translateWord()
    .then(response => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(response,'text/xml');

        ui.displayTranslate(xml.getElementsByTagName("text")[0].innerHTML);
    })
    .catch(err => console.log(err));



}