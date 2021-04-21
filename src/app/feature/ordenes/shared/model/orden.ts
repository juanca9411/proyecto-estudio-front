export class Orden{

    private idOrden:number;
    private placa:String;
    private fechaIngreso:Date;
    private fechaSalida:Date;
    private valorTotal:number;


    constructor(idOrden:number,placa:String,fechaIngreso:Date,fechaSalida:Date,valorTotal:number){
        this.idOrden=idOrden;
        this.placa=placa;
        this.fechaIngreso=fechaIngreso;
        this.fechaSalida=fechaSalida;
        this.valorTotal=valorTotal;
    }


}