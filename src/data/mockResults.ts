export interface Candidate {
  nombreAgrupacionPolitica: string;
  codigoAgrupacionPolitica: number;
  nombreCandidato: string;
  dniCandidato: string;
  totalVotosValidos: number;
  porcentajeVotosValidos: number;
  porcentajeVotosEmitidos: number;
}

export const mockResults: Candidate[] = [
  {
    nombreAgrupacionPolitica: "RENOVACIÓN POPULAR",
    codigoAgrupacionPolitica: 35,
    nombreCandidato: "RAFAEL BERNARDO LÓPEZ ALIAGA CAZORLA",
    dniCandidato: "07845838",
    totalVotosValidos: 1142392,
    porcentajeVotosValidos: 17.447,
    porcentajeVotosEmitidos: 15.239,
  },
  {
    nombreAgrupacionPolitica: "FUERZA POPULAR",
    codigoAgrupacionPolitica: 8,
    nombreCandidato: "KEIKO SOFIA FUJIMORI HIGUCHI",
    dniCandidato: "10001088",
    totalVotosValidos: 1128481,
    porcentajeVotosValidos: 17.235,
    porcentajeVotosEmitidos: 15.053,
  },
  {
    nombreAgrupacionPolitica: "PARTIDO DEL BUEN GOBIERNO",
    codigoAgrupacionPolitica: 16,
    nombreCandidato: "JORGE NIETO MONTESINOS",
    dniCandidato: "06506278",
    totalVotosValidos: 938159,
    porcentajeVotosValidos: 14.328,
    porcentajeVotosEmitidos: 12.514,
  },
  {
    nombreAgrupacionPolitica: "PARTIDO CÍVICO OBRAS",
    codigoAgrupacionPolitica: 14,
    nombreCandidato: "RICARDO PABLO BELMONT CASSINELLI",
    dniCandidato: "09177250",
    totalVotosValidos: 606038,
    porcentajeVotosValidos: 9.256,
    porcentajeVotosEmitidos: 8.084,
  },
];
