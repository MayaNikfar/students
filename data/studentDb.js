//data/student-db
const students=[
    {id: 1, name: 'Sara Smith'},
    {name:'Alex Green', id: 2},
    {name: 'John Ston', id: 3}
];

module.exports= {
    getAll,
    getOne, 
   
};

function getAll() {
    return students;
};
function getOne(id){
    id= parseInt(id);
    console.log(`Searching for student with ID: ${id}`);
    return students.find(student => student.id === id);
}