import { SolicitudJuradoModel } from "./solicitud-jurado.model";

export class EvaluacionSolicitudModel {
    id?: number;
    fechaRespuesta?: string;
    respuesta?: boolean;
    observaciones?: string;
    notificarJuradoId?: SolicitudJuradoModel;
}