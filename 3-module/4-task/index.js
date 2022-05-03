function showSalary(users, age) {
  let a = users.map (item => { 
    if (item.age <= age){return `\n${item.name}, ${item.balance}`}                
                      })
             
            
a = a.join("").trim()
return a
}
