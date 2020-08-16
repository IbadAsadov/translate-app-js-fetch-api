class UI{
    constructor() {
        this.outputWord = document.getElementById("outputWord");
        this.outputlang = document.getElementById("outputLanguage");
        this.outputimage = document.getElementById("outputImage");
        this.language = document.getElementById("language");

        
    }

     changeoutPut(){
        this.outputimage.src = `images/${this.language.value}.png`;

        this.outputlang.innerHTML = this.language.options[this.language.selectedIndex].innerHTML;

        
        
    }
    displayTranslate(res){

        this.outputWord.innerHTML = res;
    }
}