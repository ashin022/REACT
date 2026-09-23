function GrandChild({name}){
    return <h2>Helloo {name}</h2>

}

function Child({name}){
    return <GrandChild name = {name}/>

}

function ParentData(){
    return <Child name = "viki"/>

}

export default ParentData 
