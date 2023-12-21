//1-MISOL
/**let n=[1,2,3,4,5];
let hisob=0;
for (let i = 0; i <= 100; i+=1) {
    if (n[i]%2==1) {
        hisob+=1
    }
    
}
console.log(hisob); */

//2-misol
/**function uchYetti() {
    let hisob = 1;
    let n = [1, 2, 3, 4, 5,21,42];
    for (let i = 0; i <= 100; i += 1) {
        if (n[i] % 21 == 0) {
            hisob *= n[i]
        }
       
    }
    console.log(hisob);
}
uchYetti() */

//3-misol
/**function toq() {
    let n=[1,2,3,4,5,6,7];
    let m=[];
    for (let i = 0; i <=100; i+=1) {
        if (n[i]%2==1) {
            m.push(n[i])
        }
    }
    console.log(m);
}
toq() */

//4-misol
/**function juft() {
    
    let m=[];
    let x=+prompt("elementlar soni")
    for (let j = 1; j <= x; j++) {
        let elementlar=+prompt("elementlar")
        m.push(elementlar)
    }
    let n=[];
    for (let i = 0; i < x; i+=1) {
       if (i%2==1) {
        n.push(m[i])
       }
        
    }
    
    console.log(n);
}
juft() */

//5-misol
/**function soz() {
    
    let m=[];
    let x=+prompt("elementlar soni")
    for (let j = 1; j <= x; j++) {
        let elementlar=prompt("elementlar")
        m.push(elementlar)
    }
    let n=[];
    for (let i = 0; i < x; i+=1) {
         boshHarf=m[i]
         natija=boshHarf.charAt(0)
        n.push(natija)
        
    }
    
    console.log(n);
}
soz() */

//6-misol
/**function juft() {
    
    let m=[];
    let x=+prompt("elementlar soni")
    for (let j = 1; j <= x; j++) {
        let elementlar=+prompt("elementlar")
        m.push(elementlar)
    }
    for (let i = 0; i < x; i+=1) {
       if (i%2==1) {
        console.log(m[i]);
       }
        
    }
}
juft()  */

//7-misol
function juft() {
    
    let m=[];
    let x=+prompt("elementlar soni")
    for (let j = 1; j <= x; j++) {
        let elementlar=+prompt("elementlar")
        m.push(elementlar)
    }
    let n=[];
    for (let i = 0; i < x; i+=1) {
       if (m[i]%10==0) {
        n.push(m[i])
       }
        
    }
    
    console.log(n);
}
juft() 