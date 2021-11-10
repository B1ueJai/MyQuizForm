class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option Number");
   //Create a input box to enter the number



    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');



    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(325, 0);
    
 

    //Create html() and position() for each question, input and answers.

    this.question.html("Question: What starts and ends with the letter E, but only has one letter?");
    this.question.position(165,50);

    this.option1.html("1. Everyone");
    this.option1.position(160,80);

    this.option2.html("2. Envelope");
    this.option2.position(160,110);

    this.option3.html("3. Estimate");
    this.option3.position(160,140);

    this.option4.html("4. Example");
    this.option4.position(160,170);


    this.input1.position(160, 230);
    this.button.position(320, 270);
    this.input2.position(360, 230);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    this.message.html("Thank You ,Your Answer Has Been Submitted");
    this.message.position(350, 330);
    })


  }
}
