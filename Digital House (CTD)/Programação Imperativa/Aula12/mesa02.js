function digitalHouse(a,b){
    let x = 1;
    while(x<=100){
        if(x%a==0 && x%b==0){
        console.log("Digital House")
        } else if(x%a==0){
            console.log("Digital")
        } else if(x%b==0){
            console.log("House")
        } else
            console.log(x);
        x++
    }
}
digitalHouse(13,20)