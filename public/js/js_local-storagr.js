let students = []
students.push({ name: 'David', age: 18 })
students.push({ name: 'John', age: 20 })

localStorage.setItem('students', students)//key ,value

let studentsStr = JSON.stringify(students)//stringify序列化

localStorage.setItem('students', studentsStr)

let reader = localStorage.getItem('students')

console.log(reader)

let deserializeReader = JSON.parse(reader)/*讓字串轉回物件*/

console.log(deserializeReader)