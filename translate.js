class Translate{
    constructor(word,lang) {
        this.word = word;
        this.lang = lang;
        this.keyApi = "trnsl.1.1.20200508T101636Z.cd091feaf7a1e561.2fa93f0dd27543d6d1608c3108c0329e707ee72b";
        
    }

    async translateWord(){

        let url = `https://translate.yandex.net/api/v1.5/tr/translate?key=${this.keyApi}&text=${this.word}&lang=${this.lang}`;

        let data = await fetch(url);
        let data1 = await data.text();
       
        return data1
        
       

     
        


        //  .then(res => res.text())
        // .then(resj =>{
        //     let parser = new DOMParser();
        //     let xml = parser.parseFromString(resj,'text/xml');
        //     resolve(xml.getElementsByTagName("text")[0].textContent);
           
        // })

    }



}