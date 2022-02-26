import { Pipe, PipeTransform } from "@angular/core";
import { IPatient } from "../Models/Patient/patient";

@Pipe({
    name: "SearchFilter"
})
export class SearchFiltePipe implements PipeTransform{

    transform(value: IPatient[], args? : any): any {
     
        if(!value)
        return null;

        if(!args)
        return value;

        args = args.toLowerCase();
        debugger;
        // return value.filter(function(item: any){
            
        //     return JSON.stringify(item).toLowerCase().includes(args);
        // });

        if(!isNaN(args)){
            return value.filter((val: IPatient) => {
                return val.patientId.toString().includes(args);
            })
        }

        else{
            return value.filter((val: IPatient) => {
                return val.patientName.toString().includes(args);
            })
        }
    }


    // transform(items: any[], searchText: string): any{

    //     if(!items){
    //         return [];
    //     }

    //     if(!searchText){
    //         return items;
    //     }

    //     searchText = searchText.toLocaleLowerCase();

    //     return items.filter(it => {
    //         return it.toLocaleLowerCase().includes(searchText);
    //     });
    // }


}