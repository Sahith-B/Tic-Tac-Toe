let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;
let win=false;
let trunO=true;

const pattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("clicked");
        if(trunO)
        {
            box.classList.add("obox");
            box.classList.remove("xbox");
            box.innerText="O";
            trunO=false;
            count++;
        }
        else{
            box.classList.remove("obox");
            box.classList.add("xbox");
            box.innerText="X";
            trunO=true;
            count++
        }
        box.disabled=true;

        winner();
        

    });
});

const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};




const winner=()=>{
    for(let i of pattern){
        
        let p1=boxes[i[0]].innerText;
        let p2=boxes[i[1]].innerText;
        let p3=boxes[i[2]].innerText;
        

        if(p1!="" && p2!="" && p3!="")
        {
            if(p1===p2 && p2===p3){
                showWinner(p1);
            }else{
                draw(count);
            }
        }
    }
};

const showWinner=(winner)=>{
    win=true;
    msg.innerText=`winner is ${winner}`;
    msgcont.classList.remove("hide");
    disablebtn();
};

const draw=(count)=>{
    if(count===9 && win==false)
    {
        console.log(count);
        msg.innerText="Draw";
        msgcont.classList.remove("hide");
    }
};

const resgame=()=>{
    trunO=true;
    enablebtn();
    count=0;
    msgcont.classList.add("hide");
    win=false;
};

reset.addEventListener("click",resgame);
newbtn.addEventListener("click",resgame);