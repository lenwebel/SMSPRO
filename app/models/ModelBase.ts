export class ModelBase{
    
    public ToKeyValuePair(model:Object):string[]{
       let retval : string[]=[];
       debugger;
       for(var property in model){
           if (model.hasOwnProperty(property)) {
               retval.push(property);
           }
        return retval;
        }
    }    
    
}