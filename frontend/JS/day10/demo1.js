let jsonObj={
    id:10,
    fname :"Vrushali",
    lname:"Bhandare"
}
console.log(
    `
    ID :: ${jsonObj.id}
    fname :: ${jsonObj.fname}
    lname :: ${jsonObj.lname}

    `
);

let arrObj =[{
    id:10,
    fname :"Vrushali",
    lname:"Bhandare",
    country:{
        cid : 1,
        cname :"india"
    },
    month : ['APR']
},
{
    id:123,
    fname :"Gaurav",
    lname:"Thawal",
    country:{
        cid : 1,
        cname :"india"
    },
    month : ['AUG']
}
]
for(let i = 0 ; i<arrObj.length;i++)
{
    console.log(
        `
    ID :: ${arrObj[i].id}
    fname :: ${arrObj[i].fname}
    lname :: ${arrObj[i].lname}
    country :: ${arrObj[i].country.cname}
    month :: ${arrObj[i].month }
    `
    );
}