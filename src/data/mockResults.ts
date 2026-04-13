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
  {
    nombreAgrupacionPolitica: "PARTIDO PAÍS PARA TODOS",
    codigoAgrupacionPolitica: 23,
    nombreCandidato: "CARLOS GONSALO ALVAREZ LOAYZA",
    dniCandidato: "06002034",
    totalVotosValidos: 562128,
    porcentajeVotosValidos: 8.907,
    porcentajeVotosEmitidos: 7.791,
  },
  {
    nombreAgrupacionPolitica: "AHORA NACIÓN - AN",
    codigoAgrupacionPolitica: 2,
    nombreCandidato: "PABLO ALFONSO LOPEZ CHAU NAVA",
    dniCandidato: "25331980",
    totalVotosValidos: 458117,
    porcentajeVotosValidos: 7.259,
    porcentajeVotosEmitidos: 6.349,
  },
  {
    nombreAgrupacionPolitica: "JUNTOS POR EL PERÚ",
    codigoAgrupacionPolitica: 10,
    nombreCandidato: "ROBERTO HELBERT SANCHEZ PALOMINO",
    dniCandidato: "16002918",
    totalVotosValidos: 303719,
    porcentajeVotosValidos: 4.812,
    porcentajeVotosEmitidos: 4.209,
  },
  {
    nombreAgrupacionPolitica: "PRIMERO LA GENTE",
    codigoAgrupacionPolitica: 33,
    nombreCandidato: "MARIA SOLEDAD PEREZ TELLO",
    dniCandidato: "07867789",
    totalVotosValidos: 269476,
    porcentajeVotosValidos: 4.27,
    porcentajeVotosEmitidos: 3.735,
  },
];
