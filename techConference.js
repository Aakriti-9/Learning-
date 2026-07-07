// The Task 2 : The Conference Manager Script Scenario: 

conferenceManager();
//  a function can accessed before initialization / hoisting 

function conferenceManager() {

    try {
        console.log(conferenceName);
        let conferenceName = "Tech Conference 2026";
        // let variables are hoisted but remain in the Temporal Dead Zone
        // until their declaration is reached.
    }
    catch (error) {
        console.log("Temporal-Death-Zone Error:", error.message);
    }
}

const speakers = [
    {
        name : "Emma",
        course : "AI",
        fee :2000

    },
    {
        name :"John",
        course :"Frontend",
        fee :1000        
    },
    {
        name : "Kriti",
        course :"Backend",
        fee : 1500


    }
];

console.log(speakers)

const vipSpeaker = {
    name: "Elon Musk",
    course:"Twitter",
    fee: 2000
};

//spread operators
const updatedSpeakers = [...speakers, vipSpeaker];
console.log(updatedSpeakers)

// Array Destructuring
const [speaker1, speaker2, ...rest] = updatedSpeakers;

    console.log("Speaker 1:",speaker1.name);
    console.log("Speaker 2:", speaker2.name);
    console.log("Rest Speakers:", rest) //reduce((acc, item)=>{ return  [...acc, item.name]}, []))

// used rest parameter and also display the total fee in two decimal places
function calculateTotalFees(...fees) {

        let total = 0;

        for (let fee of fees) {
            total += fee;
        }

        return total;
    }

    const totalFees = calculateTotalFees(
        ...updatedSpeakers.map(speaker => speaker.fee)
    );

console.log("\nTotal Fees: $" + totalFees.toFixed(2));


// calaulate remaing date for the conference 
const today = new Date();

    const conferenceDate = new Date("2026-08-06");

    const difference = conferenceDate - today;
    const millisecondsPerDay = 1000 * 60 * 60 * 24;

//math.ceil helps to round up the decimal value, makes it easy to convert into days
    const daysLeft = Math.ceil(
        difference / millisecondsPerDay
    );

    console.log("Days Left:", daysLeft);



//DRY principle

// used toUpperCase in each 
console.log(speaker2.name.toUpperCase());
console.log(vipSpeaker.name.toUpperCase());

// but a single function is used to write the names in uppercase
function formatName(name) {
    return name.toUpperCase();
}
updatedSpeakers.forEach((speaker) => {
    console.log(formatName(speaker.name));
});

//debugging

debugger;

console.table(updatedSpeakers); // displays the array beautifully.
