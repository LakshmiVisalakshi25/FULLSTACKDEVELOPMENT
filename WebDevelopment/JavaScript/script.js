function createGrid(){
    let tab=document.createElement("table");
    let row=document.createElement("tr");
    let data=document.createElement("td");
    let parent=document.getElementsByTagName("body")[0];
    parent.appendChild(tab);
    let rows=document.getElementsByTagName("input")[0].value;
    let cols=document.getElementsByTagName("input")[1].value;
    for(var i=0;i<rows;i++){
        let row=document.createElement("tr");
        for(var j=0;j<cols;j++){
            let data=document.createElement("td");
            row.appendChild(data);
        }
        tab.appendChild(row);
    }
    tab.setAttribute("border","1px");
    tab.setAttribute("width","100px");
    tab.setAttribute("height","100px");
    tab.setAttribute("cellspacing","0");
    tab.setAttribute("style","margin-top:50px");
}

