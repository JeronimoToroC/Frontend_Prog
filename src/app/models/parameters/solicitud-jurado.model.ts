import { JuradosModel } from "./jurados.model";
import { SolicitudModel } from "./solicitud.model";

export class SolicitudJuradoModel {
    id?: number;
    solicitudId?: SolicitudModel[];
    juradosId?: JuradosModel[];
    fechaInvitacion?: string;
    linkaceptar?: string;
    linkrechazar?: string;
}