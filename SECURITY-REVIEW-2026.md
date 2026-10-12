# Säkerhetsgranskning – arbetsunderlag (2026-10-13)

Detta är en kontrollista, inte en försäkran om laguppfyllelse. Ingen produktionskod har ändrats.

## Kontroller före produktionssättning
- [ ] Kartlägg personuppgifter, lagringsplatser, mottagare och gallring enligt GDPR.
- [ ] Kontrollera att inga hemligheter, API-nycklar eller personliga loggar finns i publika filer eller Git-historik.
- [ ] Granska inmatningsvalidering och skydd mot XSS och osäkra externa länkar.
- [ ] Kontrollera PWA/service worker, cache, uppdateringar och tredjepartsberoenden.
- [ ] Testa användarseparering, export, import, återställning och säkerhetskopiering utan dataförlust.
- [ ] Dokumentera incidentrutiner, ansvar, åtkomst och uppdateringsprocess.
- [ ] Bedöm om verksamheten omfattas av cybersäkerhetslagen (2025:1506), inklusive storlek, sektor och roll.
- [ ] Genomför separat juridisk GDPR- och cybersäkerhetsbedömning innan full efterlevnad hävdas.

OBS: Endast verifierade resultat får markeras som klara.
