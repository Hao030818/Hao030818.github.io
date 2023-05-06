function checkAnswer() {

  let q1 = document.querySelector('input[name="q1"]:checked').value;
  let q2 = document.querySelector('input[name="q2"]:checked').value;
  let q3 = document.querySelector('input[name="q3"]:checked').value;
  let q4 = document.querySelector('input[name="q4"]:checked').value;
  let q5 = document.querySelector('input[name="q5"]:checked').value;

  let result = "";
if (q1 === "E" && q2 === "E" && q3 === "N" && q4 ==="J" && q5 === "N")
{result = "ENFJ - The Teacher";}
else if (q1 === "E" && q2 === "E" && q3 === "N" && q4 === "P" && q5 === "N")
{result = "ENFP - The Champion";}
else if (q1 === "E" && q2 === "E" && q3 === "S" && q4 === "J" && q5 === "S")
{result = "ESFJ - The Provider";}
else if (q1 === "E" && q2 === "E" && q3 === "S" && q4 === "P" && q5 === "S")
{result = "ESFP - The Performer";}
else if (q1 === "I" && q2 === "I" && q3 === "N" && q4 === "J" && q5 === "N")
{result = "INFJ - The Counselor";}
else if (q1 === "I" && q2 === "I" && q3 === "N" && q4 === "P" && q5 === "N")
{result = "INFP - The Healer";}
else if (q1 === "I" && q2 === "I" && q3 === "S" && q4 === "J" && q5 === "S")
{result = "ISFJ - The Protector";}
else if (q1 === "I" && q2 === "I" && q3 === "S" && q4 === "P" && q5 === "S")
{result = "ISFP - The Composer";}
else if (q1 === "E" && q2 === "I" && q3 === "S" && q4 === "J" && q5 === "N")
{result = "ESTJ - The Executive";}
else if (q1 === "E" && q2 === "I" && q3 === "S" && q4 === "P" && q5 === "N")
{result = "ESTP - The Entrepreneur";}
else if (q1 === "I" && q2 === "E" && q3 === "N" && q4 === "J" && q5 === "N")
{result = "INTJ - The Architect";}
else if (q1 === "I" && q2 === "E" && q3 === "N" && q4 === "P" && q5 === "N")
{result = "INTP - The Thinker";}
else if (q1 === "E" && q2 === "I" && q3 === "N" && q4 === "J" && q5 === "S")
{result = "ENTJ - The Commander";}
else if (q1 === "E" && q2 === "I" && q3 === "N" && q4 === "P" && q5 === "S")
{result = "ENTP - The Visionary";}
else if (q1 === "I" && q2 === "E" && q3 === "S" && q4 === "J" && q5 === "S")
{result = "ISTJ - The Inspector";}
else if (q1 === "I" && q2 === "E" && q3 === "S" && q4 === "P" && q5 === "S")
{result = "ISTP - The Craftsman";}
else {result = "unkown"}

let resultBox = document.getElementById("resultBox");
resultBox.innerHTML = "<p>Your MBTI is: " + result +"</p>";
}
