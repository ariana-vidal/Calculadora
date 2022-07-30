import React, { useState } from "react";
import "./Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    var input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function porcentage() {
    setNum(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "-") {
        console.log(oldnum)
        console.log(num)
        console.log(oldnum-num)
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
  }

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
      <img className="img" src="https://scontent.fguz1-1.fna.fbcdn.net/v/t39.30808-6/294502042_582520336714467_6574202528405515326_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFMRVPOep9wApvGhfTW8XOvs2GcTTcmGQ2zYZxNNyYZDUXfCIsXsPfxpu4mW8HKSNEsqMFaamrb60mETdF5Faky&_nc_ohc=5qRVLiwACXUAX-jwFTI&_nc_ht=scontent.fguz1-1.fna&oh=00_AT9jJGzSfzeGKV2Gs8zHU2F1PCJA1ITuGyHLCL8yFqql3g&oe=62EB46D7" alt="Girl in a jacket" width="80" height="60"></img>
          <Box m={12} />
          <h1 className="result">{num}</h1>
          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={porcentage}>%</button>
          <button className="orange" onClick={operatorHandler} value="/">
            /
          </button>
          <button className="gray" onClick={inputNum} value={7}>
            7
          </button>
          <button className="gray" onClick={inputNum} value={8}>
            8
          </button>
          <button className="gray" onClick={inputNum} value={9}>
            9
          </button>
          <button className="orange" onClick={operatorHandler} value="X">
            X
          </button>
          <button className="gray" onClick={inputNum} value={4}>
            4
          </button>
          <button className="gray" onClick={inputNum} value={5}>
            5
          </button>
          <button className="gray" onClick={inputNum} value={6}>
            6
          </button>
          <button className="orange" onClick={operatorHandler} value="-">
            -
          </button>
          <button className="gray" onClick={inputNum} value={1}>
            1
          </button>
          <button className="gray" onClick={inputNum} value={2}>
            2
          </button>
          <button className="gray" onClick={inputNum} value={3}>
            3
          </button>
          <button className="orange" onClick={operatorHandler} value="+">
            +
          </button>
          <button className="gray" onClick={inputNum} value={0}>
            0
          </button>
          <button className="gray" onClick={inputNum} value={"."}>
            ,
          </button>
          <button className="gray" style={{ visibility: "hidden" }}>
            ,
          </button>
          <button className="orange" onClick={calculate}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
}
