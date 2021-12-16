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
    foto?: string;
    tipoVinculacionId?: number;
    solicituds?: SolicitudModel[];
    foto_principal?: string;
}