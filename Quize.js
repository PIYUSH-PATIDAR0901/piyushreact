import { useRef, useState } from "react";

export default function Quize(){

    const rd1 = useRef(null)
    const rd2 = useRef(null)
    const rd3 = useRef(null)
    const rd4 = useRef(null)
    const rd5 = useRef(null)
    const rd6 = useRef(null)
    const rd7 = useRef(null)
    const rd8 = useRef(null)
    const rd9 = useRef(null)
    const rd10 = useRef(null)
    const rd11 = useRef(null)
    const rd12 = useRef(null)
    const rd13 = useRef(null)
    const rd14 = useRef(null)
    const rd15 = useRef(null)
    const rd16 = useRef(null)
    const rd17 = useRef(null)
    const rd18 = useRef(null)
    const rd19 = useRef(null)
    const rd20 = useRef(null)
    const[ans, setAns] = useState("")
    const[ans1, setAns1] = useState("")
    const[ans2, setAns2] = useState("")
    const[ans3, setAns3] = useState("")
    const[ans4, setAns4] = useState("")
    const [total, setTotal] = useState("")
    const[res, setRes] = useState("")

    function Qno1(e){
        let qn1 = [rd1.current, rd2.current, rd3.current, rd4.current]
        let qn2 = ""
        let co1 = 0
        for(let i = 0; i < qn1.length; i++){
          if(qn1[1].checked){
            qn2 += ` Your answer is right.`
            co1 = parseInt(qn1[1].value)
            break
        } 
        else{
          qn2 = `Your answer is wrong. Right answer is : ${qn1[1].title}.`
          break
        }
        }
       
        let qn3 = [rd5.current, rd6.current, rd7.current, rd8.current]
        let qn4 = ""
        let co2 = 0
        for(let j = 0; j < qn3.length; j++){
          if(qn3[2].checked){
            qn4 += `Your answer is right.`
            co2 = parseInt(qn3[2].value)
            break
        } else{
          qn4 += `Your answer is wrong . Right answer is : ${qn3[2].title}.`
          break
        }
        }
        
        let qn5 = [rd9.current, rd10.current, rd11.current, rd12.current]
      let qn6 = ""
      let co3 = 0
      for(let k = 0; k < qn5.length; k++){
        if(qn5[2].checked){
          qn6 +=  `Your answer is right.`
          co3 = parseInt(qn5[2].value)
          break
        }else{
          qn6 += `Your answer is wrong . Right answer is : ${qn5[2].title}.`
          break
        }
      }
           
      let qn7 = [rd13.current, rd14.current, rd15.current, rd16.current]
      let qn8 = ""
      let co4 = 0
      for(let l = 0; l < qn7.length; l++){
        if(qn7[1].checked){
          qn8 += `Your answer is right.`
          co4 += parseInt(qn7[1].value)
          break
        } else{
          qn8 += `Your answer is wrong . Right answer is : ${qn7[1].title}.`
          break
        }
        }    
          
      let qn9 = [rd17.current, rd18.current, rd19.current, rd20.current]
      let qn10 = "" 
      let co5 = 0
      for(let m = 0; m < qn9.length; m++){
        if(qn9[0].checked && qn9[1].checked){
          qn10 += `Your answer is right.`
          co5 += parseInt(qn9[0].value)
          break
        }else{
          qn10 += `Your answer is wrong . Right answer is  Both: ${qn9[0].title}, ${qn9[1].title}.`
          break
        }
      }
    
      let tot = (co1 + co2 + co3 + co4 + co5)
      let result = ""
      if(tot > 6){
        result += "Pass"
      }else{
        result += "Fail"
      }
      setAns(qn2)
      setAns1(qn4)
      setAns2(qn6)
      setAns3(qn8)
      setAns4(qn10)
      setTotal(tot)
      setRes(result)
      e.preventDefault()
    }
    return(
      <>
          <div className="container my-5">
            <p>Q No.1- Right to Safety, Right to information, Right to Choose, Right to be heard  Right to Seek Redressal are the essential components of which among the following?</p>
            <div className="form-check">
                <input
                className="form-check-input"
                type="radio"
                name="C1"
                ref={rd1}
                title=" Fundamental Rights in the Constitution of India"
                value="2"
                />
               <label className="form-check-label">Fundamental Rights in the Constitution of India</label>
            </div>   
            <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="C1"
              ref={rd2}
              title=" The Consumer Protection Act"
              value="2"
            />
            <label className="form-check-label" id="Corr1">The Consumer Protection Act</label>
            </div>
            <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="C1"
              ref={rd3}
              title=" The Essential Commodities Act"
              value="2"
            />
            <label className="form-check-label">The Essential Commodities Act</label>
            </div>
            <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="C1"
              ref={rd4}
              title=" Prevention of Corruption Act"
              value="2"
            />
            <label className="form-check-label">Prevention of Corruption Act</label>
            <h5>{ans}</h5>
          </div>  
            <div className="container">
              <p className="my-4">Q No.2- In which of the following circumstances, the speaker and deputy speaker of the Lok Sabha have to vacate their offices?</p>
              <div className="form-check">
                  <input
                  className="form-check-input"
                  type="radio"
                  name="C2"
                  ref={rd5}
                  title=" at wish of the President"
                  value="2"
                  />
                <label className="form-check-label">at wish of the President</label>
            </div>   
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="C2"
                ref={rd6}
                title=" when ruling party loses confidence"
                value="2"
              />
              <label className="form-check-label" id="Corr1">when ruling party loses confidence</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="C2"
                ref={rd7}
              title=" when they are no longer members of parliament"
              value="2"
              />
              <label className="form-check-label">when they are no longer members of parliament</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="C2"
                ref={rd8}
                title=" immediately after dissolution of Lok Sabha"
                value="2"
              />
              <label className="form-check-label">immediately after dissolution of Lok Sabha</label>
              <h5>{ans1}</h5>
            </div>
          </div>  
            <div className="container">
              <p className="my-4">Q No.3- What is the maximum gap / interval between two sessions of parliament?</p>
              <div className="form-check">
                    <input
                    className="form-check-input"
                    type="radio"
                    name="C3"
                    ref={rd9}
                    title=" 30 days"
                    value="2"
                    />
                  <label className="form-check-label">30 days</label>
              </div>   
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="C3"
                  ref={rd10}
                  title=" 50 days"
                  value="2"
                />
                <label className="form-check-label" id="Corr1">50 days</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="C3"
                  ref={rd11}
                  title="  6 months"
                  value="2"
                />
                <label className="form-check-label"> 6 months</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="C3"
                  ref={rd12}
                  title=" 12 months"
                  value="2"
                />
                <label className="form-check-label">12 months</label>
                <h5>{ans2}</h5>
              </div>
            </div>   
            <div className="container">
              <p className="my-4">Q No.4-Upon encountering empty statements, what does the Javascript Interpreter do?</p>
              <div className="form-check">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    name="C4"
                    ref={rd13}
                    title=" Throws an error"
                    value="2"
                    />
                  <label className="form-check-label">Throws an error</label>
              </div>   
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="C4"
                  ref={rd14}
                  title=" Ignores the statements"
                  value="2"
                />
                <label className="form-check-label" id="Corr1">Ignores the statements</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="C4"
                  ref={rd15}
                  title=" Gives a warning"
                  value="2"
                />
                <label className="form-check-label">Gives a warning</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="C4"
                  ref={rd16}
                  title=" None of the above"
                  value="2"
                />
                <label className="form-check-label">None of the above</label>
                <h5>{ans3}</h5>
              </div>
            </div>   
            <div className="container">
              <p className="my-4">Q No.5- Which is the correct JavaScript statement to display "Hello Boss!" into an alert box?</p>
              <div className="form-check">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    name="C5"
                    ref={rd17}
                    title=" Document.write(Hello Boss!)"
                    value="2"
                    />
                  <label className="form-check-label">Document.write(Hello Boss!)</label>
              </div>   
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="C5"
                  ref={rd18}
                  title=" Console.log(Hello Boss!)"
                  value="2"
                />
                <label className="form-check-label" id="Corr1">Console.log(Hello Boss!)</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="C5"
                  ref={rd19}
                  title=" alert(Text:'Hello Boss!');"
                  value="2"
                />
                <label className="form-check-label">alert(Text:'Hello Boss!');</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="C5"
                  ref={rd20}
                  title=" None of the above"
                  value="2"
                />
                <label className="form-check-label">None of the above</label>
                <h5>{ans4}</h5>
              </div>
            </div>   
              <div className="form-check">
                <input
                  className="bg-primary text-light"
                  type="button"
                  value="Show answer"
                  onClick={Qno1}
                />
              </div>
             
                <h5 className="my-4">Your total marks is: {total}</h5>
                <h5>Your result is: {res}</h5>
          </div>  
      </>
    )
}