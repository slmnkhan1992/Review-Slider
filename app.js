let count = 0;

const persons = [
    {
        name: 'Muhammad Salman',
        Designation: 'Full Stack Developer',
        Image: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-profile-pic-vector-png-image_6882560.png",
        Description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, facilis optio! Quis veniam velit expedita tenetur, rerum, voluptatum sequi impedit libero adipisci minima modi et ullam, consequuntur sit cum perferendis'
    },

    {
        name: 'Zaid Khan',
        Designation: 'Frot End Developer',
        Image: "https://static.vecteezy.com/system/resources/previews/019/900/322/non_2x/happy-young-cute-illustration-face-profile-png.png",
        Description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, facilis optio! Quis veniam velit expedita tenetur, rerum, voluptatum sequi impedit libero adipisci minima modi et ullam, consequuntur sit cum perferendis'
    },

    {
        name: 'Sameer Khan',
        Designation: 'Back End Developer',
        Image: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-profile-picture-vector-png-image_6985292.png",
        Description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, facilis optio! Quis veniam velit expedita tenetur, rerum, voluptatum sequi impedit libero adipisci minima modi et ullam, consequuntur sit cum perferendis'
    },

    {
        name: 'Shariq Khan',
        Designation: 'Computer Scicen Engineer',
        Image: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-profile-picture-png-image_6985293.png",
        Description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, facilis optio! Quis veniam velit expedita tenetur, rerum, voluptatum sequi impedit libero adipisci minima modi et ullam, consequuntur sit cum perferendis'
    }
]



function nextHandler() {
    count++;
    if (count >= persons.length) {
        count = 0;
    }
    updated()
}


function previousHandler() {
    count--;
    if (count < 0) {    
        count = persons.length - 1;
    }
    updated()
}


function updated() {
    const newCount = persons[count]
    document.querySelector('#name h2').innerHTML = newCount.name
    document.querySelector('#designation h4').innerHTML = newCount.Designation
    document.querySelector('#description').innerHTML = newCount.Description
    document.querySelector('#image img').src = newCount.Image

}