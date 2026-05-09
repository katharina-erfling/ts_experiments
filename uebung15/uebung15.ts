// Typen für die zwei Instrumente mit jeweils eigener Methode
type Guitar = { strum: () => void };
type Piano = { pressKeys: () => void };

// Narrowing mit `in`: prüft welche Methode vorhanden ist, um den Typ zu bestimmen
function play(instrument: Guitar | Piano) {
    if ('strum' in instrument) {
        instrument.strum();        // → Guitar
    } else {
        instrument.pressKeys();    // → Piano
    }
}

const guitar: Guitar = {
    strum: () => console.log("Strumming the guitar!")
};

const piano: Piano = {
    pressKeys: () => console.log("Pressing piano keys!")
};

play(guitar); // → "Strumming the guitar!"
play(piano);  // → "Pressing piano keys!"