function repeatString(txt, n){
  return typeof txt !== 'string' ? 'Not A String !!' : txt.repeat(n)
}

repeatString("Mubashir", 2) // "MubashirMubashir"
repeatString("Matt", 3) // "MattMattMatt"
repeatString(1990, 7) // "Not A String !!"
repeatString("*", 3) // "***"
repeatString("Hello", 11) // "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello"
repeatString("243624", 22) // "243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624"
repeatString([],3) // "Not A String !!"
repeatString({},3) // "Not A String !!"
repeatString(24,3) // "Not A String !!"
repeatString(true,3) // "Not A String !!"
repeatString("Hello",0) // ""
