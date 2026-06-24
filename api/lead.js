export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method' });

  const p = req.body;
  const a = p.answers || {};

  // --- per-product prices from the breakdown ---
  const priceByKey = { zonnepanelen: null, thuisbatterij: null, laadpaal: null, ems: null };

  const matchKey = (label) => {
    const l = (label || '').toLowerCase();
    if (l.includes('batterij')) return 'thuisbatterij';
    if (l.includes('laadpaal') || l.includes('laad')) return 'laadpaal';
    if (l.includes('ems') || l.includes('management') || l.includes('energiebeheer')) return 'ems';
    if (l.includes('zonnepa') || l.includes('paneel') || l.includes('pv')) return 'zonnepanelen';
    return null;
  };

  (p.estimate.breakdown || []).forEach(it => {
    const k = matchKey(it.label);
    if (k) priceByKey[k] = it.amount;
  });

  const offerteRegels = (p.estimate.breakdown || [])
    .map(it => `${it.label}: € ${Number(it.amount).toLocaleString('nl-NL')}`)
    .join('\n');

  // Flatten into one level so GHL custom-field mapping is trivial
  const flat = {
    // top-level identity → used by GHL find-or-create
    firstName: p.contact.firstName,
    lastName:  p.contact.lastName,
    email:     p.contact.email,
    phone:     p.contact.phone,
    address1:  p.contact.street,
    postalCode: p.contact.postalCode,
    city:      p.contact.city,
    consent:   p.contact.consent,

    // meta
    market: p.meta.market,
    segment: p.meta.segment,
    source: p.meta.source,
    submittedAt: p.meta.submittedAt,
    interests: (p.interests || []).join(', '),
    notes: p.notes,

    // answers (flattened)
    jaarverbruikKwh: a.zonnepanelen?.jaarverbruikKwh,
    daktype: a.zonnepanelen?.daktype,
    batteryReady: a.zonnepanelen?.batteryReady,
    heeftPanelen: a.thuisbatterij?.heeftPanelen,
    batterijCapaciteitKwh: a.thuisbatterij?.gewensteCapaciteitKwh,
    laadpaalType: a.laadpaal?.type,
    laadpaalMetZon: a.laadpaal?.metZonnepanelen,
    woningOuderDan10Jaar: p.woning?.ouderDan10Jaar,
    btwTarief: p.woning?.btwTarief,

    // estimate
    panelen: p.estimate.panelen,
    kwp: p.estimate.kwp,
    jaaropbrengstKwh: p.estimate.jaaropbrengstKwh,
    priceLow: p.estimate.priceLow,
    priceMid: p.estimate.priceMid,
    priceHigh: p.estimate.priceHigh,
    btwVoordeel: p.estimate.btwVoordeel,
    besparingPerJaar: p.estimate.besparingPerJaar,
    besparingPerMaand: p.estimate.besparingPerMaand,
    besparing25Jaar: p.estimate.besparing25Jaar,
    terugverdientijdJaar: p.estimate.terugverdientijdJaar,

    // per-product prices (discrete fields → map each to a GHL custom field)
    prijsZonnepanelen: priceByKey.zonnepanelen,
    prijsThuisbatterij: priceByKey.thuisbatterij,
    prijsLaadpaal: priceByKey.laadpaal,
    prijsEms: priceByKey.ems,

    // formatted block for email/document templates
    offerteRegels: offerteRegels,
    offerteRegelsJson: JSON.stringify(p.estimate.breakdown || []),
    totaalPrijs: p.estimate.priceMid,
  };

  try {
    const r = await fetch(process.env.GHL_WEBHOOK_URL_PC, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(flat)
    });
    return res.status(r.ok ? 200 : 502).json({ ok: r.ok });
  } catch (err) {
    return res.status(500).json({ error: 'forward failed' });
  }
}
