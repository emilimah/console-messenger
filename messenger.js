function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

class Message {
    constructor(author, text, time) {
        this.author = author;
        this.text = text;
        this.time = time;
    }

    toString() {
        return `${this.time} ${this.author}: ${this.text}`
    }
}

class Messenger {
    message = new Message();
    history = [];

    send(author, text) {
        this.message.author = author;
        this.message.text = text;
        this.message.time = gettime();

        this.history.push(this.message.toString());
    }

    show_history() {
        console.log(this.history.join("\n"))
    }
}

let messenger = new Messenger();
messenger.send('Adil', 'ilk mesaj');
messenger.send('Məryəm', 'İkinci mesaj');
messenger.show_history();