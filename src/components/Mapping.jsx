function Mapping() {

    const list1=[1,2,3,4,5,6];
    const listItem=list1.map((number)=><li>{number}</li>)
    return ( 
        <div>
          <ul>{listItem}</ul>
        </div>
     );
}

export default Mapping;