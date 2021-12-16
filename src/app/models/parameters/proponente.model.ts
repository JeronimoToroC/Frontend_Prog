import { SolicitudModel } from "./solicitud.model";

export class ProponenteModel {
    id?: number;
    name?: string;
    lastName?: string;
    document?: string;
    password?: string;
    email?: string;
    cell?: string;
    rolesId?: string;
    foto?: any;
    tipoVinculacionId?: number;
    solicituds?: SolicitudModel[];
}