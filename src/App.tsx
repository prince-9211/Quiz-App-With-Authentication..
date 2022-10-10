import React, {  useEffect, useState } from "react";
import "./App.css";
import { getQuizDetails } from "./services/service";
import { quiz, userE,userP,userC,userT,userL } from "./types/types";
import QuestionUi from "./components/QuestionUi";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import LoginButton from "./authentication/Loginbutton";
import { categories} from "./services/service";
import Submit from "./authentication/Submit";


function App() {
  let [quiz, setQuiz] = useState<quiz[]>([]);
  let [step, setStep] = useState<number>(0);
  let [totalQuestions, setTotalQuestions] = useState<number>(5);
  let [category, setCategory] = useState<number>(9);
  let [level, setLevel] = useState<string>("easy");
  let [points, setPoints] = useState<number>(0);
  let [start, setStart] = useState<boolean>(false);
  const [userP, setUserP]= useState<userP | null>(null)
  const [userC, setUserC]= useState<userC | null>(null)
  const [userN, setUserN]= useState<userE | null>(null)
  const [userL, setUserL]= useState<userL | null>(null)
  const [userT, setUserT]= useState<userT | null>(null)
  const [na, setNa] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const data = await getQuizDetails(totalQuestions, category, level);

      setQuiz(data);
    };
    fetch();
  }, [totalQuestions, category, level]);
  
  useEffect(() => {
    let i=category
    const data = async () => {
      const cateo = await categories();
      for (const d of cateo) {
        if (d.id === i){
          setNa(d.name)
        }
      }
    };
    data();
    // console.log(na)
  }, [category]);

  const handelSubmit = (
    e: React.FormEvent<EventTarget>,
    selectedAns: string
  ) => {
    e.preventDefault();

    if (selectedAns === quiz[step].answer) {
      setPoints(++points);
    }
    if (step !== totalQuestions) {
      setStep(++step);
    }
  };

  if (!quiz.length) {
    return <h1 className="loader">Loading...</h1>;
  }

  if (step === totalQuestions) {
    let Submmit = document.getElementsByClassName('user-data')[0]?.innerHTML
  const postUserData=()=>{
    setUserN({
      name: document.getElementsByClassName('user-data')[0]?.innerHTML+'@gmail.com'
    })
    setUserP({
      point: points
    })
    setUserC({
      category: na
    })
    setUserL({
      level: level
    })
    setUserT({
      total: totalQuestions
    })
    // console.log(userN,userP,userC,userT,userL)
  }
  // console.log(userData)
  const submitData = async (event: any) => {
      postUserData()
       event.preventDefault();
       fetch(
          "https://authentication-e462d-default-rtdb.firebaseio.com/userDataRecords.json",
       {
          method: "POST",
          headers: {
              "Content-Type": "aplication/json",
          },
          body: JSON.stringify({
            userN,
            userC,
            userL,
            userT,
            userP,
          }),
       }
      );
  };
    return (
      <>
      <div className="header" >
          <a href="./" >TRIVIA GAME</a>
      <div className="lbutton" ><LoginButton /></div>
      
      </div>
        <div className="exit">
          <h1 style={{color: `${points >= totalQuestions/2 ?'green' : 'red'}`}}>
            {points >= totalQuestions / 2
              ? `CONGRATS!`
              : `BETTER LUCK NEXT TIME `}
          </h1>
          <h1>You have completed Your Quiz</h1>
            <h2>TOTAL POINTS : {points}/{totalQuestions}</h2>
          <button
            className="btn"
            onClick={() => {
              setStep(0);
              setStart(!start);
              setTotalQuestions(5);
              setLevel("easy");
              setCategory(9);
              setPoints(0)
            }}
          >
            New Quiz
          </button>
            
            {/* <h1>{category}</h1> */}
          <button className="btn" onClick={submitData}>update data</button>
        </div>
        {Submmit?<Submit />:""}
        <Footer/>
      </>
    );
  }
  

  return (
    <div>
      {start ? (
        <QuestionUi
          question={quiz[step].question}
          options={quiz[step].options}
          handelSubmit={handelSubmit}
        />
      ) : (
        <Welcome
          setCategory={setCategory}
          setTotalQuestions={setTotalQuestions}
          setLevel={setLevel}
          setStart={setStart}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;

