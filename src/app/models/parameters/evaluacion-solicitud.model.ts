import { JuradosModel } from "./jurados.model";
import { SolicitudModel } from "./solicitud.model";

export class EvaluacionSolicitudModel {
    id?: number;
    solicitudId?: SolicitudModel[];
    juradosId?: JuradosModel[];
    fechaRespuesta?: string;
    respuesta?: boolean;
    observaciones?: string;
    fechaInvitacion?: string;
}