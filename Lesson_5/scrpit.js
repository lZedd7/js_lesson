const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id:11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]


function averageStudentMark(id){
    const student = students.find((student) => student.id === id);
 
    return !student
    ?   null
    : student.marks.reduce((acc, mark) => acc + mark ) / student.marks.length;
                  
}
function averageGroupMark(){
const groupMarks = students.flatMap (({marks}) => marks);
    // groupMarks = students.map (({marks}) => marks).reduce((acc,el) => acc.concat(el));
        return arrAvg(groupMarks.reduce((acc, mark) => acc + mark ) /groupMarks.length);
}

function arrAvg(arr){
    return arr.reduce((acc, mark) => acc + mark ) /arr.length;

}
averageStudentMark(10); 
averageGroupMark(students);