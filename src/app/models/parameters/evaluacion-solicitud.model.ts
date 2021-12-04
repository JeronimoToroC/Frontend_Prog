import { JuradosModel } from "./jurados.model";
import { SolicitudModel } from "./solicitud.model";

export class EvaluacionSolicitudModel {
    id?: number;
    solicitudId?: SolicitudModel[];
    juradosId?: JuradosModel[];
    fechaInvitacion?: string;
    fechaRespuesta?: string;
    respuesta?: boolean;
    observaciones?: string;
}