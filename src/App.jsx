import Student from './components/Student'
import './App.css'

const students = [
  { name: 'Mohan ji', rollNo: 101, course: 'B.TECH(CSE-23)', image: 'https://i.pravatar.cc/160?img=12' },
  { name: 'Rajan', rollNo: 102, course: 'BCA(CORE-1)', image: 'https://i.pravatar.cc/160?img=11' },
  { name: 'Varun', rollNo: 103, course: 'B.Sc(CSE-12)', image: 'https://i.pravatar.cc/160?img=13' },
]

function App() {
  return (
    <main className="record-page">
      <h1>STUDENT RECORD</h1>
      <section className="student-list" aria-label="Student records">
        {students.map((student) => (
          <Student
            key={student.rollNo}
            name={student.name}
            rollNo={student.rollNo}
            course={student.course}
            
            image={student.image}
          />
        ))}
      </section>
    </main>
  )
}

export default App
