function Click(){
    let tab=document.createElement("table");
    let row=document.createElement("tr");
    let data1=document.createElement("td");
    let parent=document.getElementsByTagName("body")[0];
    parent.appendChild(tab);
    let rows=document.getElementsByTagName("input")[0].value;
    let b1=document.createElement("button");
    b1.innerText="Top"
    b1.setAttribute("onclick","fun()");
    let b2=document.createElement("button");
    b2.innerText="Left"
    let b3=document.createElement("button");
    b3.innerText="Right"
    let b4=document.createElement("button");
    b4.innerText="Bottom"
    parent.appendChild(b1);
    parent.appendChild(b2);
    parent.appendChild(b3);
    parent.appendChild(b4);
    for(var i=0;i<rows;i++){
        let row=document.createElement("tr");
        for(var j=0;j<rows;j++){
            let data1=document.createElement("td");
            data1.setAttribute("width","30px");
            data1.setAttribute("height","30px");
           if (i === 0 && j === 0) {
                let im = document.createElement("img");
                im.setAttribute("src", "./bubuwalk.gif");
                im.setAttribute("width", "100%");
                im.setAttribute("height", "100%");
                data1.appendChild(im);
            }
            row.appendChild(data1);
        }
        tab.appendChild(row);
    }
    tab.setAttribute("border","1px");
    tab.setAttribute("width","100px");
    tab.setAttribute("height","100px");
    tab.setAttribute("cellspacing","0");
    tab.setAttribute("style","margin-top:50px;background-color:black");
    // let im=document.createElement("img");
    // im.setAttribute("src","./gift.jpeg");
    
}
