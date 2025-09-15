function welcome(prop) {
  return <h2>Welcome to React {prop.name} !</h2>;
}
function app(){
    return(
        <div>
            <welcome name="aveena"/>
            <welcome name="saveena"/>
        </div>
    )
}