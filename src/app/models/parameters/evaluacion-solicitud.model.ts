import { JuradosModel } from "./jurados.model";

export class VehicleModel {
    id?: number;
    id_solicitud?: number;
    jurados?: JuradosModel[];
    fechaInvitacion?: string;
    fechaRespuesta?: string;
    respuesta?: boolean;
    observaciones?: string;
}