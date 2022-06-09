class buch {
    titel
    autor
    verlag
    verfuegbar
    preis


    constructor(titel, preis, autor, verlag, verfuegbar) {

        this.titel = titel
        this.preis = preis
        this.autor = autor
        this.verlag = verlag
        this.verfuegbar = verfuegbar

    }


    verfuegbar() {

        if (this.verfuegbar > 1) {
            console.log("Dein Buch ist vorhanden du Glücklicher/e")
        } else {
            console.log("Da war wohl jemand schneller")

        }

    }

    verkauft() {
        this.verfuegbar -= 1

        document.getElementById("verkauft").innerHTML = "Du hast erfolgreich Geld verdient"

    }
}
let lager= [buch1, buch2, buch3, buch4]

function init() {
    buch1 = new buch ("Die Tribute von Panem", 30)


}