// using Intern constructor 
const Intern = require('../lib/Intern');

// creating intern 
test('creates an Intern object', () => {
    const intern = new Intern('Damien', 1, 'damienjinks39@gmail.com', 'WBH');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Damien', 1, 'damienjinks39@gmail.com', 'WBH');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Damien', 1, 'damienjinks39@gmail.com', 'WBH');

    expect(intern.getRole()).toEqual("Intern");
}); 