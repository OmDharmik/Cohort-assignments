import './App.css'

function BusinessCard(props){
  return <>
  <div className='card'>
    <h1>{props.name}</h1>
    <p>{props.description}</p>
    <h3>Interests</h3>
    <ul>
      {props.interests.map((str,index) => <li key={index} >{str}</li>)}
    </ul>
    <button>LinkedIn</button>
    <button>Twitter</button>
  </div>

  </>

}

function App() {
  return <>
    <BusinessCard name="Om" description="learning fullstack" interests = {["coding", "reading", "travelling"]} />
  </>
}




export default App
