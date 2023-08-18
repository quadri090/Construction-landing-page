function DisplayImages({name, classs}){
    return(
        <>
        
        <img src={name} alt={name} className={classs} />        
        </>
    )
}
export default DisplayImages