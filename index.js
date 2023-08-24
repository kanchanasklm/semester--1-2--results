let buttonEl=document.getElementById("button");
let finalResultEl=document.getElementById("result");

let DiscreteMathsEl=document.getElementById("DiscreteMaths");
let EngineeringPhysicsEl=document.getElementById("EngineeringPhysics");
let MEFAEl=document.getElementById("MEFA");
let OOPSEl=document.getElementById("OOPS");
let DataStructuresEl=document.getElementById("DataStructures");
let EngineeringPhysicsLabEl=document.getElementById("EngineeringPhysicsLab");
let OOPSLabEl=document.getElementById("OOPSLab");
let DataStructuresLabEl=document.getElementById("DataStructuresLab");
let EnvironmentalScienceEl=document.getElementById("EnvironmentalScience");
let creddits=22.5; 
let result=0;
// let count=0;
function credits(subGrade, creditts) {

    // count++;
    if (subGrade === "Ex") {
        // result += (10 * creditts);
        return (10 * creditts)
        

    } else if (subGrade === "A") {
        // result += (9 * creditts);
        return (9 * creditts)
    } else if (subGrade === "B") {
        // result += (8 * creditts);
        return (8 * creditts);
        
    } else if (subGrade === "C") {
        // result += (7 * creditts);
        return (7 * creditts)
    } else if (subGrade === "D") {
        // result += (6 * creditts);
        return (6 * creditts)
    }
    else if (subGrade === "E") {
        // result += (6 * creditts);
        return (5 * creditts)
    }
    else if (subGrade === "F") {
        // result += (6 * creditts);
        return 0
    }
    
//    finalResultEl.textContent=result/creddits;
}



buttonEl.onclick=function()
{
    let DiscreteMathsElGrade = DiscreteMathsEl.value;
    let EngineeringPhysicsElGrade = EngineeringPhysicsEl.value;
    let MEFAElGrade=MEFAEl.value;
    let OOPSElGrade=OOPSEl.value; 
    let DataStructuresElGrade=DataStructuresEl.value;
    let EngineeringPhysicsLabElGrade=EngineeringPhysicsLabEl.value;
    let OOPSLabElGrade=OOPSLabEl.value;
    let DataStructuresLabElGrade=DataStructuresLabEl.value;
    let EnvironmentalScienceElGrade=EnvironmentalScienceEl.value;

   
    result+=credits(DiscreteMathsElGrade,4);
    result+=credits(EngineeringPhysicsElGrade,4);
    result+=credits(MEFAElGrade,3);
    result+=credits(OOPSElGrade,4);
    result+=credits(DataStructuresElGrade,3);
    result+=credits(EngineeringPhysicsLabElGrade,1.5);
    result+=credits(OOPSLabElGrade,1.5);
    result+=credits(DataStructuresLabElGrade,1.5);
    result+=credits(EnvironmentalScienceElGrade,0);
    // alert(result/creddits);
    // if(result===0){
    //     finalResultEl.textContent="you failed"
    // }
    finalResultEl.textContent=(result/creddits).toFixed(2);
    result=0;
};
