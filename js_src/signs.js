module.exports = {
    SignList: [
        "Aries",
        "Taurus",
        "Gemini",
        "Cancer",
        "Leo",
        "Virgo",
        "Libra",
        "Scorpio",
        "Sagittarius",
        "Capricorn",
        "Aquarius",
        "Pisces"
    ],
    Aries: {
        name: "Aries",
        startDate: '',
        endDate: '',
        element: 'Fire',
        quality: 'Cardinal',
        polarity: 'Masculine', //masculine? or positive/negative?
        planet: 'Mars',
        image: 'http://pngimg.com/uploads/aries/small/aries_PNG36.png',
        description: 'First Sign in the Zodiac.\n Setting the start of the Cycle in the end of March with the Element of Fire.'

    },
    Taurus: {
        name: "Taurus",
        startDate: '',
        endDate: '',
        element: 'Earth',
        quality: 'Fixed',
        polarity: '', //masculine? or positive/negative?
        planet: '',
        image: 'url',
        description: 'First Sign in the Zodiac.\n Setting the start of the Cycle in the end of March with the Element of Fire.'
    },
    Gemini: {
        name: "Gemini",
        startDate: '',
        endDate: '',
        element: 'Air',
        quality: 'Mutable',
        polarity: 'Masculine', //masculine? or positive/negative?
        planet: '',
        image: 'url',
        description: 'First Sign in the Zodiac.\n Setting the start of the Cycle in the end of March with the Element of Fire.'
    },
    Cancer: {
        name: "Cancer",
        startDate: '',
        endDate: '',
        element: 'Water',
        quality: 'Cardinal',
        polarity: '', //masculine? or positive/negative?
        planet: '',
        image: 'url',
        description: 'First Sign in the Zodiac.\n Setting the start of the Cycle in the end of March with the Element of Fire.'
    },
    Leo: {
        name: "Leo",
        startDate: '',
        endDate: '',
        element: 'Fire',
        quality: 'Fixed',
        polarity: 'Masculine', //masculine? or positive/negative?
        planet: '',
        image: 'url',
        description: 'First Sign in the Zodiac.\n Setting the start of the Cycle in the end of March with the Element of Fire.'
    },
    Virgo: {
        name: "Virgo",
        startDate: '',
        endDate: '',
        element: 'Earth',
        quality: 'Mutable',
        polarity: 'Feminine', //masculine? or positive/negative?
        planet: '',
        image: 'url',
        description: 'First Sign in the Zodiac.\n Setting the start of the Cycle in the end of March with the Element of Fire.'
    },
    Libra: {
        name: "Libra",
        startDate: '',
        endDate: '',
        element: 'Air',
        quality: 'Cardinal',
        polarity: '', //masculine? or positive/negative?
        planet: '',
        image: 'url',
        description: 'First Sign in the Zodiac.\n Setting the start of the Cycle in the end of March with the Element of Fire.'
    },
    Scorpio: {
        name: "Scorpio",
        startDate: '',
        endDate: '',
        element: 'Water',
        quality: 'Fixed',
        polarity: '', //masculine? or positive/negative?
        planet: '',
        image: 'url',
        description: 'First Sign in the Zodiac.\n Setting the start of the Cycle in the end of March with the Element of Fire.'
    },
    Sagittarius: {
        name: "Sagittarius",
        startDate: '',
        endDate: '',
        element: 'Fire',
        quality: 'Mutable',
        polarity: 'Masculine', //masculine? or positive/negative?
        planet: 'Jupiter',
        image: 'url',
        description: 'First Sign in the Zodiac.\n Setting the start of the Cycle in the end of March with the Element of Fire.'
    },
    Capricorn: {
        name: "Capricorn",
        startDate: '',
        endDate: '',
        element: 'Earth',
        quality: 'Cardinal',
        polarity: '', //masculine? or positive/negative?
        planet: '',
        image: 'url',
        description: 'First Sign in the Zodiac.\n Setting the start of the Cycle in the end of March with the Element of Fire.'
    },
    Aquarius: {
        name: "Aquarius",
        startDate: '',
        endDate: '',
        element: 'Air',
        quality: 'Fixed',
        polarity: '', //masculine? or positive/negative?
        planet: '',
        image: 'url',
        description: 'First Sign in the Zodiac.\n Setting the start of the Cycle in the end of March with the Element of Fire.'
    },
    Pisces: {
        name: "Pisces",
        startDate: '',
        endDate: '',
        element: 'Water',
        quality: 'Mutable',
        polarity: '', //masculine? or positive/negative?
        planet: '',
        image: 'url',
        description: 'First Sign in the Zodiac.\n Setting the start of the Cycle in the end of March with the Element of Fire.'
    },
    Signs:  {
        Aries: this.Aries,
        Taurus: this.Taurus,
        Gemini: this.Gemini,
        Cancer: this.Cancer,
        Leo: this.Leo,
        Virgo: this.Virgo,
        Libra: this.Libra,
        Scorpio: this.Scorpio,
        Sagittarius: this.Sagittarius,
        Capricorn: this.Capricorn,
        Aquarius: this.Aquarius,
        Pisces: this.Pisces
    },
    list: function() {
        let str = this.SignList;
        return str;
    },
    capitalize: function(signName) {
        return signName.charAt(0).toUpperCase() + signName.slice(1)
    },
    getSign: function(signName) {
        let signFound = false;
        let sign = null;
        const signCap = signName.charAt(0).toUpperCase() + signName.slice(1)
        if (this[signCap]){
            signFound = true;
            sign = this[signCap];
            console.log("sign in getSign"+sign["element"]);
        }
        if (!signFound) {
            return null;
        } else {
            return sign;
        }


    },
    getSignName: function(signName) {
        return this.getSign(signName)["name"];
    }
}
