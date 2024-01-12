const fs=require('fs')
exports.create=(req,res)=>{
    console.log(req.body);
   users.push(req.body)
   res.json(req.body)
}

exports.getAll= (req,res)=>{
    res.json(users)
   
}

exports.getOne=(req,res)=>{

   
    id=+req.params.id;
    const user=users.find(p=>p.id===id)
    res.json(user)

    
}

exports.Replace=(req,res)=>{
    id=+req.params.id;
    const userindex=users.findIndex(p=>p.id===id)
    users.splice(userindex,1,{...req.body,id:id})
    res.status(201).json(req.body)
    
}

exports.update=(req,res)=>{
    id=+req.params.id;
    const userindex=users.findIndex(p=>p.id===id)
    const user=users[userindex]
    users.splice(userindex,1,{...user,...req.body})
    
}

exports.deleteOne=(req,res)=>{
    id=+req.params.id;
    const userindex=users.findIndex(p=>p.id===id)
    const user=users[userindex]
    users.splice(userindex,1)
    res.status(201).json(user)}