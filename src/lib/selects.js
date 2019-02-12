export function onUpdateGetKeyList(name,data){
  //On group change
  switch (name) {
    case "groups":
      return Object.assign({},data , {
         species : null,
         variety : null,
         category : null,
         market :  null,
         region : null
       })
    case "species":
      return Object.assign({},data , {
         variety : null,
         category : null,
         market :  null,
         region : null
       })
    case "variety":
      return Object.assign({},data , {
         category : null,
         market :  null,
         region : null
       })
    case "category":
      return Object.assign({},data , {
         market :  null,
         region : null
        })
    case "region":
      return Object.assign({},data , {
         market :  null
        })
    case "market":
      return Object.assign({},data , {})
    default:
      return data
  }

}
