import type { APIRoute } from "astro";
import { mockResults } from "../../data/mockResults";

const ONPE_API_URL =
  "https://resultadoelectoral.onpe.gob.pe/presentacion-backend/resumen-general/participantes?idEleccion=10&tipoFiltro=eleccion";

export const GET: APIRoute = async () => {
  try {
    const response = await fetch(ONPE_API_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "es-ES,es;q=0.9,en;q=0.8",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
      },
    });

    if (!response.ok) {
      throw new Error(`ONPE API returned ${response.status}`);
    }

    const data = await response.json();

    if (data.success && Array.isArray(data.data)) {
      const sorted = data.data.sort(
        (a: { totalVotosValidos: number }, b: { totalVotosValidos: number }) =>
          b.totalVotosValidos - a.totalVotosValidos
      );
      const top4 = sorted.slice(0, 4);

      return new Response(JSON.stringify({ success: true, data: top4 }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
      });
    }

    throw new Error("Invalid response structure from ONPE API");
  } catch (error) {
    console.error("Error fetching from ONPE API, using fallback:", error);

    return new Response(
      JSON.stringify({ success: true, data: mockResults, fallback: true }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
      }
    );
  }
};
