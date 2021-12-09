import { ComiteModel } from "./comite.model"
import { ProponenteModel } from "./proponente.model";
export class SolicitudModel {
  id?: number;
  dateRad?: string;
  workName?: string;
  comiteType?: ComiteModel[];
  file?: any;
  description?: string;
  lineasInvestigacionId?: number;
  modalidadId?: number;
  tipoSolicitudId?: number;
  proponenteId?: ProponenteModel;
}
