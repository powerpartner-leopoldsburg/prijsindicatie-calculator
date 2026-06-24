export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method' });

  try {
    if (!process.env.GHL_WEBHOOK_URL_PC) {
      return res.status(500).json({ error: 'GHL_WEBHOOK_URL_PC env var is not set' });
    }

    const p = req.body || {};
    const contact = p.contact || {};
    const meta = p.meta || {};
    const a = p.answers || {};
    const woning = p.woning || {};
    const estimate = p.estimate || {};
    const breakdown = estimate.breakdown || [];

    const priceByKey = { zonnepanelen: null, thuisbatterij: null, laadpaal: null, ems: null };
    const matchKey = (label) => {
      const l = (label || '').toLowerCase();
      if (l.includes('batterij')) return 'thuisbatterij';
      if (l.includes('laadpaal') || l.includes('laad')) return 'laadpaal';
      if (l.includes('ems') || l.includes('management') || l.includes('energiebeheer')) return 'ems';
      if (l.includes('zonnepa') || l.includes('paneel') || l.includes('pv')) return 'zonnepanelen';
      return null;
    };
    breakdown.forEach(it => { const k = matchKey(it.label); if (k) priceByKey[k] = it.amount; });

    const offerteRegels = breakdown
      .map(it => `${it.label}: € ${Number(it.amount).toLocaleString('nl-NL')}`)
      .join('\n');

    const flat = {
      firstName: contact.firstName, lastName: contact.lastName,
      email: contact.email, phone: contact.phone,
      address1: contact.street, postalCode: contact.postalCode,
      city: contact.city, consent: contact.consent,

      market: meta.market, segment: meta.segment, source: meta.source,
      submittedAt: meta.submittedAt, interests: (p.interests || []).join(', '), notes: p.notes,

      jaarverbruikKwh: a.zonnepanelen?.jaarverbruikKwh,
      daktype: a.zonnepanelen?.daktype,
      batteryReady: a.zonnepanelen?.batteryReady,
      heeftPanelen: a.thuisbatterij?.heeftPanelen,
      batterijCapaciteitKwh: a.thuisbatterij?.gewensteCapaciteitKwh,
      laadpaalType: a.laadpaal?.type,
      laadpaalMetZon: a.laadpaal?.metZonnepanelen,
      woningOuderDan10Jaar: woning.ouderDan10Jaar,
      btwTarief: woning.btwTarief,

      panelen: estimate.panelen, kwp: estimate.kwp,
      jaaropbrengstKwh: estimate.jaaropbrengstKwh,
      priceLow: estimate.priceLow, priceMid: estimate.priceMid, priceHigh: estimate.priceHigh,
      btwVoordeel: estimate.btwVoordeel,
      besparingPerJaar: estimate.besparingPerJaar,
      besparingPerMaand: estimate.besparingPerMaand,
      besparing25Jaar: estimate.besparing25Jaar,
      terugverdientijdJaar: estimate.terugverdientijdJaar,

      prijsZonnepanelen: priceByKey.zonnepanelen,
      prijsThuisbatterij: priceByKey.thuisbatterij,
      prijsLaadpaal: priceByKey.laadpaal,
      prijsEms: priceByKey.ems,

      offerteRegels,
      offerteRegelsJson: JSON.stringify(breakdown),
      totaalPrijs: estimate.priceMid,
    };

    const r = await fetch(process.env.GHL_WEBHOOK_URL_PC, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(flat),
    });
    const text = await r.text();
    return res.status(r.ok ? 200 : 502).json({ ok: r.ok, ghlStatus: r.status, ghlBody: text });
  } catch (err) {
    return res.status(500).json({ error: String(err && err.message || err) });
  }
}
