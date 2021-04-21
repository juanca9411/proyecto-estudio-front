export class Orden{

    private idOrden:number;
    private placa:String;
    private fechaIngreso:Date;
    private fechaSalida:Date;
    private total:number;


    constructor(idOrden:number,placa:String,fechaIngreso:Date,fechaSalida:Date,total:number){
        this.idOrden=idOrden;
        this.placa=placa;
        this.fechaIngreso=fechaIngreso;
        this.fechaSalida=fechaSalida;
        this.total=total;
    }


}